import React from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import('../public/pages/styles/css/mavatahome.webflow.css')

//import Landing from './components/Landing2';
import Two from './components/Landing';
// let LandingTwo = require('./pages/landing.js')



export default () => {

  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/companies/last" >
              {/* get last company name and render company component */}
            </Route>
            <Route exact path="/companies" component={Two} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
