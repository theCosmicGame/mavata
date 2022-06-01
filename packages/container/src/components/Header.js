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

  return (  
    <React.Fragment>
      <NavbarContainer isSignedIn={isSignedIn}>
      
          <ul className={classes.navItem}>
            <Logo />
          </ul>

          <ul className={classes.navItem}>
            {isSignedIn ? <NavTabs isSignedIn={isSignedIn} /> : ''}
          </ul>

          <ul className={classes.navItem}>
            <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
            <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>
          </ul>

      </NavbarContainer>
    </React.Fragment>
  );
}
