import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import Album from './components/Companies';

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
            <Route path="/companies/last" >
              {/* get last company name and render company component */}
            </Route>
            <Route exact path="/companies">
              <Album />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};