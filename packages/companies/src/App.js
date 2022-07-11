import React, { useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { port } from './variables/port';
import "./assets/css/mdb.css";

import Album from './components/Companies';
import Company from './components/Company';
import Settings from './components/UserSettings';
import NavbarDev from './components/NavbarDev';

import { rows } from './variables/Users';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});

const generateClassName = createGenerateClassName({
  productionPrefix: 'comp',
});

export default ({ history }) => {
  let whatPort = location.port;

  // redirect only once
  if (process.env.NODE_ENV === 'development') {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        history.push('/companies/last');
      }, 10);
      return () => clearTimeout(timeoutId);
    }, [])
  }

  console.log(whatPort, port)
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          {(process.env.NODE_ENV === 'development' && whatPort === port.toString())  ? <NavbarDev /> : ''}
          <Switch>
            <Route exact path="/companies/last" component={Company} />
            {/* get last company name and render company component */}
            <Route path='/companies/:company' component={Company} />
            <Route exact path="/user/settings" component={Settings} />
            <Route path="/companies" component={Album} />
            <Route path='/'>
              {/* <Redirect to="/companies/last" /> */}
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};