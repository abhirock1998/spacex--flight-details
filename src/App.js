import React from "react";
import "./App.css";
import { Header, Filter, Footer, MainArea } from "./component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseSpaceXListener } from "./hooks/endPoint-listener";

function App() {
  const showAllSpaceX = UseSpaceXListener(`?limit=100`);

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__flex">
          <div className="app__fixed">
            <Filter />
          </div>
          <div className="app__scroll">
            <Switch>
              <Route path="/">
                <MainArea spaceXAll={showAllSpaceX} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
