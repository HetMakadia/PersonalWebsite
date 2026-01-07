const functions = require("firebase-functions");
const admin = require("firebase-admin");
const crypto = require("crypto");

admin.initializeApp();

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (xff) return xff.split(",")[0].trim();
  return req.ip || req.connection?.remoteAddress || null;
}

function hashIp(ip) {
  if (!ip) return null;
  const salt = functions.config().privacy?.ip_salt || "CHANGE_ME_SALT";
  return crypto.createHash("sha256").update(ip + salt).digest("hex");
}

async function geoLookup(ip) {
  if (!ip) return null;
  const normalizedIp = ip.startsWith("::ffff:") ? ip.replace("::ffff:", "") : ip;

  try {
    const url = `https://ipapi.co/${encodeURIComponent(normalizedIp)}/json/`;
    const resp = await fetch(url);
    if (!resp.ok) return null;

    const j = await resp.json();

    return {
      ip: j.ip || normalizedIp,
      city: j.city || null,
      region: j.region || null,
      country: j.country_name || null,
      countryCode: j.country_code || null,
      postal: j.postal || null,
      latitude: typeof j.latitude === "number" ? j.latitude : null,
      longitude: typeof j.longitude === "number" ? j.longitude : null,
      timezone: j.timezone || null,
      org: j.org || null,
      source: "ipapi.co",
    };
  } catch (e) {
    console.error("geoLookup failed", e);
    return null;
  }
}

exports.logVisit = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

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

exports.attachGps = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

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
