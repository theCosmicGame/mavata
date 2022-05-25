import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

 import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'dash2',
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
          <Route path="/user/companies">
              <Signin onSignIn={onSignIn} />
            </Route>
            {/* BEM to add more routing */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
