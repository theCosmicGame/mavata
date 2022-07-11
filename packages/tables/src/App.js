import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

import DataTable from './components/DataTable';
import Home from './components/Home';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});


export default ({ history }) => {
  // ClassNameGenerator.configure(
  //   (DataTable) => `tbls-${DataTable}`,
  // );

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={DataTable} />
          <Route path='/tables' component={Home} />
        </Switch>
      </Router>
    </div>
  );
};