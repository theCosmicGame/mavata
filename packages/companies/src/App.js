import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "./layouts/Admin";

import Dashboard from "./views/Dashboard.js";
import UserProfile from "./views/UserProfile.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import Icons from "./views/Icons.js";
import Maps from "./views/Maps.js";
import Notifications from "./views/Notifications.js";
import Upgrade from "./views/Upgrade.js";

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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/companies/last" >
              {/* get last company name and render company component */}
            </Route>
            <Route exact path="/companies">
              <Album />
            </Route>
            <Route path="/">
              <Redirect to='/companies' />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};