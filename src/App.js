import { useEffect, useRef } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const LOG_VISIT_URL =
    "https://us-central1-myportfolio-fbc40.cloudfunctions.net/logVisit";

const ATTACH_GPS_URL =
    "https://us-central1-myportfolio-fbc40.cloudfunctions.net/attachGps";


function App() {
    const visitIdRef = useRef(null);

    // 1) Log visit (IP-based approximate location) - log only once per tab session
    useEffect(() => {
        const alreadyLogged = sessionStorage.getItem("visitLogged") === "1";
        if (alreadyLogged) return;
        sessionStorage.setItem("visitLogged", "1");

        (async () => {
            try {
                const resp = await fetch(LOG_VISIT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ path: window.location.pathname }),
                });

                const json = await resp.json();
                if (json?.visitId) {
                    visitIdRef.current = json.visitId;
                    sessionStorage.setItem("visitId", json.visitId); // optional: keep it around
                }
            } catch {
                // ignore
            }
        })();
    }, []);

    // 2) Immediately request GPS on page load (precise location if user allows)
    useEffect(() => {
        if (!("geolocation" in navigator)) return;

        const waitForVisitIdThenAskGps = () => {
            // if we saved it earlier, reuse it
            if (!visitIdRef.current) {
                const stored = sessionStorage.getItem("visitId");
                if (stored) visitIdRef.current = stored;
            }

            if (!visitIdRef.current) {
                setTimeout(waitForVisitIdThenAskGps, 300);
                return;
            }

            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    try {
                        const { latitude, longitude, accuracy } = pos.coords;

                        await fetch(ATTACH_GPS_URL, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                visitId: visitIdRef.current,
                                lat: latitude,
                                lon: longitude,
                                accuracy,
                            }),
                        });
                    } catch {
                        // ignore
                    }
                },
                () => {
                    // user denied / unavailable -> do nothing
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        };

        waitForVisitIdThenAskGps();
    }, []);

    return (
        <div className="bg-neutral h-screen grid grid-cols-12">
            <div className="h-full col-span-12">
                <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
                    <Navbar />
                </header>

                <LandingPage />
                <WorkExperience />
                <Projects />
                <Education />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

export default App;
