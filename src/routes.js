import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import IoT from './IoT';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Main" exact component={Main} />
        <Route path="/Iot" exact component={IoT} />
      </Switch>
    );
  }
}
