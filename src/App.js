import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ChatMode from "./components/ChatMode/ChatMode";
import { BackToTop } from "./components/common/BackToTop";
import { AmbientBackground } from "./components/common/AmbientBackground";

function App() {
    const [mode, setMode] = useState("site"); // "site" | "chat"
    const isChatMode = mode === "chat";

    return (
        <div className={`grid grid-cols-12 ${isChatMode ? "h-dvh overflow-hidden" : "h-screen"}`}>
            <AmbientBackground />
            <div className={`h-full col-span-12 ${isChatMode ? "overflow-hidden" : ""}`}>
                <header className="fixed top-0 left-0 right-0 z-30">
                    <Navbar mode={mode} onExitChat={() => setMode("site")} />
                </header>

                {isChatMode ? (
                    <ChatMode />
                ) : (
                    <>
                        <LandingPage onEnterChat={() => setMode("chat")} />
                        <WorkExperience />
                        <Projects />
                        <Education />
                        <Skills />
                        <Contact />
                        <BackToTop />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
