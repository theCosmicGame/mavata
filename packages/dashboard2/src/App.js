import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import ListCompanies from './components/ListCompanies'

const generateClassName = createGenerateClassName({
  productionPrefix: 'das',
});

/* 
Rather than create a memory history object inside app.js, we create it in bootstrap.js because we want to customize it quite a bit
*/
export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/user/companies" component={ListCompanies} />
            <Route>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
