import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import Logo from './Logo';
import ButtonNew from './Navbar/ButtonNew';
import NavTabs from './Navbar/NavTabs';
import NavbarContainer from './Navbar/NavbarContainer';
import useStyles from './styling/NavStyle';

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
      console.log(isSignedIn)
    }
  };

  if (false) {
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
                      <RouterLink to={url} key={index}>
                          <a>{title}</a>
                      </RouterLink>
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
        <React.Fragment>
        <NavbarContainer>
            <ul className={classes.navItem}>
            <Logo />
            </ul>        
            <ul className={classes.navItem}>
              {isSignedIn ? <NavTabs /> : ''}
            </ul>
            <ul className={classes.navItem}>
              <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
              <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>
            </ul>
      </NavbarContainer>
      </React.Fragment>
      );
}
}
