import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/header";

function App() {
  return (
    <HashRouter>
      <main>
        <Header />
        <div className={"container"}>
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
