import React from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

//import Landing from './components/Landing2';
import Two from './components/Landing';
// let LandingTwo = require('./pages/landing.js')



export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
          <Route exact path="p">
            <Redirect push to={"../pages/index.html"} />
          </Route>
            <Route exact path="/landing">
                <Redirect push to={"/pages/faq.html"} />
            </Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
