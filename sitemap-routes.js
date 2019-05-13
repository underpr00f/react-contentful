import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/rooms/" />
    <Route exact path="/rooms/:slug" />
  </Switch>
);