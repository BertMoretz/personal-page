import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import WorkExperience from "./components/work-experience/work-experience";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import Publications from "./components/publications/publications";
import AdditionalInfo from "./components/additional-info/additional-info";
import Contact from "./components/contact/contact";

function App() {
  return (
    <HashRouter>
      <main>
        <Header />
        <div className={"container"}>
          <div className={"main-part"}>
            <WorkExperience />
            <Education />
            <Projects />
            <Publications />
            <AdditionalInfo />
          </div>
          <div className={"contact-part"}>
            <Contact />
          </div>
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
