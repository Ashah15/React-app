import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './logic/Calculator/Calculator';
import Header from './logic/Header/Header';
import Home from './logic/Home/Home';
import Quote from './logic/Quote/Quote';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;