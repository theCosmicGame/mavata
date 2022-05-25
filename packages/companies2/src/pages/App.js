import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@mui/styles';

import Landing from './components/Home';

export default () => {
    return (
      <div>
        <StylesProvider>
        <BrowserRouter>
            <Switch>
              <Route path="/pricing" exact component={Landing} />
            </Switch>
          </BrowserRouter>
        </StylesProvider>
      </div>
    );
  };
  