import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Questions from './containers/Questions/Questions';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import EndScreen from './containers/EndScreen/EndScreen';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static" align="center">
          <h1>Do you Know?</h1>
        </AppBar>
        <Switch>
          <Route path="/end" exact component={EndScreen} />
          <Route path="/start-quiz" exact component={Questions} />
          <Route path="/" exact component={WelcomeScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
