import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharInfo from "./components/CharInfo";

const App = () => (
  <>
  <Switch>
  <Route exact path="/" component={Home} />
  </Switch>
  </>
);

export default App;
