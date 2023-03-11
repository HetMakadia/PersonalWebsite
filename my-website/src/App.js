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
      <div className="bg-neutral">
          <LandingPage/>
          <Projects/>
          <WorkExperience/>
          <Skills/>
          <Contact/>
      </div>

  );
}

export default App;
