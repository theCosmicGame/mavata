import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

/* 
Rather than create a memory history object inside app.js, we create it in bootstrap.js because we want to customize it quite a bit
*/
export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router location={history.location} history={history}>
        <Routes>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
