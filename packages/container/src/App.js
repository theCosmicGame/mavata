import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';


import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});

// deleted because we are now using lazy function and Suspense module
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Progress from './components/Navbar/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const CompaniesLazy = lazy(() => import('./components/CompaniesApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'contr',
});

const history = createBrowserHistory();


export default () => {
  // useState is a HOOK to keep track of the application state IN A FUNCTION COMPONENT, in this case if the user isSignedIn
  // State generally refers to data or properties that need to be tracking in an application
  // hooks can only be called at the top level of a component; cannot be conditional; and can only be called inside React function commponents 
  // useState accepts an initial state and returns two values: the current state, and a function that updates the state 
  const [isSignedIn, setIsSignedIn] = useState(false);

  // 
  useEffect(() => {
    if (isSignedIn) {
      history.push('/companies/last')
    }
  }, [isSignedIn]);


  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />} >
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/companies">
                {!isSignedIn && <Redirect to="/" />}
                <CompaniesLazy />
              </Route>
              <Route path="/user">
                {!isSignedIn && <Redirect to="/" />}
                <CompaniesLazy />
              </Route>
              <Route path="/earlyaccess" component={MarketingLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
