import logo from './logo.svg';
import { useEffect, useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const LOG_VISIT_URL = "https://logvisit-pzx5xq63aa-uc.a.run.app";
const ATTACH_GPS_URL =
    "https://us-central1-myportfolio-fbc40.cloudfunctions.net/attachGps";


function App() {

    const visitIdRef = useRef(null);
    const [gpsStatus, setGpsStatus] = useState("");

// Auto log visit (IP-based geo) on load
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(LOG_VISIT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ path: window.location.pathname }),
                });

                const json = await resp.json();
                if (json?.visitId) visitIdRef.current = json.visitId;
            } catch {
                // ignore
            }
        })();
    }, []);

// Call this when user clicks a button (GPS permission prompt)
    const enablePreciseLocation = () => {
        if (!("geolocation" in navigator)) {
            setGpsStatus("Geolocation not supported.");
            return;
        }

        setGpsStatus("Requesting permission...");

        const tryAttach = () => {
            const visitId = visitIdRef.current;

            // Wait until logVisit has returned the visitId
            if (!visitId) {
                setTimeout(tryAttach, 300);
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
                                visitId,
                                lat: latitude,
                                lon: longitude,
                                accuracy,
                            }),
                        });

                        setGpsStatus("Precise location saved.");
                    } catch {
                        setGpsStatus("Could not save precise location.");
                    }
                },
                () => setGpsStatus("Permission denied or location unavailable."),
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        };

        tryAttach();
    };



    useEffect(() => {
        enablePreciseLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className=" bg-neutral  h-screen grid grid-cols-12">

          <div className="h-full  col-span-12">
              <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
                  <Navbar/>
              </header>
              <LandingPage/>
              <WorkExperience/>
              <Projects/>
              <Education/>
              <Skills/>
              <Contact />
          </div>

      </div>


  );
}

export default App;
