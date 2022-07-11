import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});

export default ({ history }) => {
  
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/companies" />
        </Switch>
      </Router>
    </div>
  );
};