import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import WorkExperience from "./components/work-experience/work-experience";

function App() {
  return (
    <HashRouter>
      <main>
        <Header />
        <div className={"container"}>
          <WorkExperience />
          {/*<Switch>*/}
          {/*  /!*<Route exact path="/" component={HomePage}/>*!/*/}
          {/*  <Redirect from="*" to="/"/>*/}
          {/*</Switch>*/}
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
