import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import "./assets/css/all.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Album from './components/Companies';
import Company from './components/Company';
import Settings from './components/UserSettings'

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
  
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/companies/last" component={Company} />
              {/* get last company name and render company component */}
            <Route exact path="/user/settings" component={Settings} />
            <Route path="/companies" component={Album} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};