import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { BackToTop } from "./components/common/BackToTop";
import { AmbientBackground } from "./components/common/AmbientBackground";

function App() {
    return (
        <div className="h-screen grid grid-cols-12">
            <AmbientBackground />
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
                <BackToTop />
            </div>
        </div>
    );
}

export default App;
