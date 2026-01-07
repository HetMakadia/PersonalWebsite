const functions = require("firebase-functions");
const admin = require("firebase-admin");
const crypto = require("crypto");
const cors = require("cors");
const fetch = require("node-fetch");


admin.initializeApp();

// ✅ CORS middleware (allows localhost + your hosting domains)
const corsHandler = cors({
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://myportfolio-fbc40.web.app",
    "https://myportfolio-fbc40.firebaseapp.com",
    "https://hetmakadia.com"
  ],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
});

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (xff) return xff.split(",")[0].trim();
  return req.ip || req.connection?.remoteAddress || null;
}

function hashIp(ip) {
  if (!ip) return null;
  const IP_SALT = process.env.IP_SALT || "DEV_FALLBACK_SALT";
  return crypto.createHash("sha256").update(ip + IP_SALT).digest("hex");
}

async function geoLookup(ip) {
  if (!ip) return null;

  const normalizedIp = ip.startsWith("::ffff:") ? ip.replace("::ffff:", "") : ip;

  // If it's a private/local IP, geo lookup will not work
  const isPrivate =
      normalizedIp === "127.0.0.1" ||
      normalizedIp === "::1" ||
      normalizedIp.startsWith("10.") ||
      normalizedIp.startsWith("192.168.") ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(normalizedIp);

  if (isPrivate) return null;

  try {
    const url = `https://ipwho.is/${encodeURIComponent(normalizedIp)}`;
    const resp = await fetch(url);

    // Even on errors, ipwho.is returns JSON, so parse it
    const j = await resp.json().catch(() => null);
    if (!j || j.success === false) return null;

    return {
      ip: j.ip || normalizedIp,
      city: j.city || null,
      region: j.region || null,
      country: j.country || null,
      countryCode: j.country_code || null,
      postal: j.postal || null,
      latitude: typeof j.latitude === "number" ? j.latitude : Number(j.latitude) || null,
      longitude: typeof j.longitude === "number" ? j.longitude : Number(j.longitude) || null,
      timezone: j.timezone?.id || null,
      org: j.connection?.org || null,
      source: "ipwho.is",
    };
  } catch (e) {
    console.error("geoLookup failed", e);
    return null;
  }
}

exports.logVisit = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    try {
      const ip = getClientIp(req);
      const ipHash = hashIp(ip);
      const ipGeo = await geoLookup(ip);

      const docRef = await admin.firestore().collection("visits").add({
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        ipHash,
        ipGeo,
        userAgent: req.get("user-agent") || null,
        referrer: req.get("referer") || null,
        path: req.body?.path || null,
      });

      return res.status(200).json({ok: true, visitId: docRef.id});
    } catch (e) {
      console.error(e);
      return res.status(500).json({ok: false});
    }
  });
});

exports.attachGps = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    try {
      const {visitId, lat, lon, accuracy} = req.body || {};
      if (!visitId || typeof lat !== "number" || typeof lon !== "number") {
        return res.status(400).json({ok: false, error: "Invalid payload"});
      }

      await admin.firestore().collection("visits").doc(visitId).set(
          {
            gps: {
              lat,
              lon,
              accuracy: typeof accuracy === "number" ? accuracy : null,
              capturedAt: admin.firestore.FieldValue.serverTimestamp(),
            },
          },
          {merge: true},
      );

      return res.status(200).json({ok: true});
    } catch (e) {
      console.error(e);
      return res.status(500).json({ok: false});
    }
  });
});
