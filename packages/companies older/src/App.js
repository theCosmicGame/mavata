import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

 import CompaniesPage from '../pages/Companies';
 import CompanyPage from '../pages/Companies';

const generateClassName = createGenerateClassName({
  productionPrefix: 'comp',
});

/* 
Rather than create a memory history object inside app.js, we create it in bootstrap.js because we want to customize it quite a bit
*/
export default ({ history, initialCompany }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/company">
              <CompanyPage initialCompany={initialCompany} />
            </Route>
            <Route path="/companies">
              <CompaniesPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
