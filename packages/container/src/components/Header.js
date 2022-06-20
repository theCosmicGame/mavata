import React from 'react';
import Logo from './Navbar/Logo';
import ButtonNew from './Navbar/ButtonNew';
import NavTabs from './Navbar/NavTabs';
import NavSelect from './Navbar/NavSelect';
import NavbarContainer from './Navbar/NavbarContainer';
import useStyles from './styling/NavStyle';

import Dropdown from './Navbar/Dropdown';

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
      console.log(isSignedIn)
    }
  };

  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"], // BEM TO DO: change to dropdown 
    ["Settings", "/dashboard"]
  ];

  return (  
    <React.Fragment>
      <NavbarContainer isSignedIn={isSignedIn} >

          <ul className={classes.navItem} >
            <Logo />
          </ul>
          <ul className={classes.navItem} >
            <div className={classes.navItemMd}>{isSignedIn ? <NavTabs linkMap={linkMap} /> : ''}</div>
            <div className={classes.navItemSm}>{isSignedIn ? <NavSelect linkMap={linkMap} /> : ''}</div>
          </ul>

          <ul className={classes.navItem}>
            <ButtonNew to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick}>{isSignedIn ? 'Logout' : 'Login'}</ButtonNew>
            {isSignedIn ? '' : <ButtonNew to='/earlyaccess'>Early Access ➝</ButtonNew>}
          </ul>

      </NavbarContainer>
    </React.Fragment>
  );
}
