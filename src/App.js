import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container'

import TopBar from "./components/topbar.component"
import SessionList from "./components/SessionList.component";
import EditSession from "./components/EditSession.component";
import CreateSession from "./components/CreateSession.component";
import CreateCampaign from "./components/CreateCampaign.component";


function App() {
  return (
    <Router>
      <Container>
        <br/>
        <h1>Dungeon Tracker</h1>
        <TopBar />
        <br/>
        <Route path="/" exact component={SessionList} />
        <Route path="/edit/:id" component={EditSession} />
        <Route path="/createSes" component={CreateSession} />
        <Route path="/createCamp" component={CreateCampaign} />
      </Container>
    </Router>
  );
}

export default App;
