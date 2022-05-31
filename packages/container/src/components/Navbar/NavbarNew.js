import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../Logo'
import ButtonNew from './ButtonNew'
import NavbarContainer from './NavbarContainer'

import { Link as RouterLink } from 'react-router-dom';
import useStyles from '../styling/NavStyle';
import usingStyles from '../styling/HeaderStyles';



 export default function NavbarNew({ isSignedIn, onSignOut }) {
    const onClick = () => {
      // && onSignOut function is ALWAYS TRUE
      if (isSignedIn && onSignOut) {
        onSignOut();
      }
    };
    const classes = useStyles();

    if (true) {
      return (
        <React.Fragment>
          <NavbarContainer>              
            <div className={classes.navContainer}>
              <Logo />
              <div>
                <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
                <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>
              </div>
            </div>
          <div className={classes.mobileMenu}></div>
          <div className={classes.wNavOverlay} id="w-nav-overlay-0" ></div>
          
        </NavbarContainer>
        </React.Fragment>
      )
    } else {
      const classes = usingStyles();

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
      )
    }
  };