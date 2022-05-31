import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as NewLink } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styling/HeaderStyles';
import NavbarNew from './Navbar/NavbarNew';

export default function Header({ isSignedIn, onSignOut, activePage }) {
  const classes = useStyles();


  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  
  const onLink = () => {
    // BEM TO DO: do something with ActivePage - set indicator in navbar
    
  }

  const linkMap = [
      ["All Companies ", "/companies"],
      ["Company Profile ", "/companies/last"],
      ["Settings ", "/user/settings"]
  ];

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
                  {linkMap.map(([title, url], index) => (
                      <NewLink to={url} key={index}>
                          <a>{title}</a>
                      </NewLink>
                  ))}
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
        <NavbarNew onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
      );
}
}
