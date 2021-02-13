import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import SessionList from "./components/SessionList.component";
import EditSession from "./components/EditSession.component";
import CreateSession from "./components/CreateSession.component";
import CreateCampaign from "./components/CreateCampaign.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={SessionList} />
        <Route path="/edit/:id" component={EditSession} />
        <Route path="/createSes" component={CreateSession} />
        <Route path="/createCamp" component={CreateCampaign} />
      </div>
    </Router>
  );
}

export default App;
