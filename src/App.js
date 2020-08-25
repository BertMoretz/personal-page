import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import WorkExperience from "./components/work-experience/work-experience";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";

function App() {
  return (
    <HashRouter>
      <main>
        <Header />
        <div className={"container"}>
          <WorkExperience />
          <Education />
          <Projects />
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
