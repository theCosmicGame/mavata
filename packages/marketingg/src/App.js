import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Landing from './components/Landing';
import EarlyAccess from './components/LandingPages/EarlyAccess';

import WebFont from 'webfontloader';

if (process.env.NODE_ENV === 'development') {
  WebFont.load({
    google: {
      families: ['Barlow', 'Playfair Display', 'Overpass']
    }
  });
}

function Boo() {
  return (
    <h1>Heyyy</h1>
  )
}

/* 
Rather than create a memory history object inside app.js, we create it in bootstrap.js because we want to customize it quite a bit
*/
export default ({ history }) => {

  return (
    <div>
      <Router location={history.location} history={history}>
        <Routes>
          {/* <Route exact path="/earlyaccess" element={ <EarlyAccess /> } />
          <Route exact path="/learn" element={ <EarlyAccess /> } /> */}
          <Route path="/" element={ <Boo /> } />
        </Routes>
      </Router>
    </div>
  );
};
