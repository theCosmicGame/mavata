import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles/HeaderStyles';
import NavBar from './NavBar'

export default function Header({ isSignedIn, onSignOut, activePage }) {
  const classes = useStyles();

  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  
  const onLink = () => {
    // BEM TO DO: do something with ActivePage
    
  }

  if (isSignedIn) {
      return (
        <React.Fragment>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar}>
            <li className={classes.navItem}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                component={RouterLink}
                to="/"
              >
                Mavata2
              </Typography>
              </li>
              <li  className={classes.navItem}>
                <NavBar />
              </li>
              {/* insert navbar segment with indicator */}
              <li className={classes.navItem}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.link}
                component={RouterLink}
                to={isSignedIn ? '/' : '/auth/signin'}
                onClick={onClick}
              >
                {isSignedIn ? 'Logout' : 'Login'}
              </Button>
              </li>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      );
  } else {
      return (  
        <React.Fragment>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                component={RouterLink}
                to="/"
              >
                Mavata
              </Typography>
              <Button
                color="primary"
                variant="outlined"
                className={classes.link}
                component={RouterLink}
                to={isSignedIn ? '/' : '/auth/signin'}
                onClick={onClick}
              >
                {isSignedIn ? 'Logout' : 'Login'}
              </Button>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      );
}
}
