import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { port } from './variables/global';
import "./assets/css/mdb.css";

import Companies from './components/Companies';
import Company from './components/Company';
// import Settings from './components/UserSettings';
import NavbarDev from './components/NavbarDev';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});

function CompaniesRouter() {
  return (
    <Routes>
      <Route path="/" element={<Companies />} />
      <Route path="/last" element={<Company />} />
    </Routes>
  )
}

function Boo() {
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}

function Test({ firstRender, setFirstRender }) {
  
  let el = (
    <React.Fragment>
      <h1>hellooooo</h1>
    </React.Fragment>
  )
  console.log('render', firstRender)

  // redirect only once
  // useEffect(() => {
    if (process.env.NODE_ENV === 'development' && firstRender) {
      el = <Navigate replace to='/companies/last' />
      setFirstRender(false);
    }
  // }, [])

  return el
}

export default ({ history }) => {
  console.log('app', history.location.pathname)
  let whatPort = location.port;
  
  const [firstRender, setFirstRender] = useState(true);
  // let firstRender = true;

  return (
    <Router history={history}>
      {(process.env.NODE_ENV === 'development' && whatPort === port.toString()) ? <NavbarDev /> : ''}
      <Routes>
        <Route path="/companies/*" element={<CompaniesRouter />} />

        {/* get last company name and render company component */}
        {/* <Route path='/companies/:company' component={Company} /> */}
        <Route path="/user/settings" element={<Companies />} />
        {/* <Route path='/' element={<Test firstRender={firstRender} setFirstRender={setFirstRender} />} /> */}
        <Route path='/' element={ <Boo /> } />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};