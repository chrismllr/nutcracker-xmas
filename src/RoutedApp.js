import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import IsItMadison from './routes/IsItMadison';
import GoAway from './routes/GoAway';
import LetMeTellYou from './routes/LetMeTellYou';
import BassAndNuts from './routes/BassAndNuts';
import Tickets from './routes/Tickets';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IsItMadison}/>
          <Route path="/go-away" component={GoAway}/>
          <Route path="/let-me-tell-you" component={LetMeTellYou} />
          <Route path="/bass-and-nuts" component={BassAndNuts} />
          <Route path="/tickets" component={Tickets} />
        </Switch>
      </Router>
    );
  }
}

export default App;
