import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
      <div className=" bg-neutral  h-screen grid grid-cols-12">
          <div className="h-full  col-span-12">
              <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
                  <Navbar/>
              </header>
              <LandingPage/>
              <Education/>
              <Projects/>
              <WorkExperience/>
              <Skills/>
              <Contact/>
          </div>
      </div>

  );
}

export default App;
