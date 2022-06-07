import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

//import Landing from './components/Landing2';
import Album from './components/Companies';
// let LandingAlbum = require('./pages/landing.js')

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