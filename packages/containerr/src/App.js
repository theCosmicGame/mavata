import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;
  }

  html {
    height: 100%;
  }
`

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
// const AuthLazy = lazy(() => import('./components/AuthApp'));
const CompaniesLazy = lazy(() => import('./components/CompanyApp'));

const history = createBrowserHistory();

// remove comment

export default function App() {
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
      <div>
        <GlobalStyle />
        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<Progress />} >
          <Routes>
            {/* <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/companies">
              {!isSignedIn && <Navigate to="/" replace />}
              <CompaniesLazy />
            </Route>
            <Route path="/user">
              {!isSignedIn && <Navigate to="/" replace />}
              <CompaniesLazy />
            </Route>
            <Route path="/earlyaccess" element={ <MarketingLazy /> } /> */}
            <Route path="/" element={ <MarketingLazy /> } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};