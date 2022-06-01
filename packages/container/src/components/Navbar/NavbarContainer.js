import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styling/NavStyle';

export default function NavbarContainer({ isSignedIn, ...props}) {
  const classes = useStyles();
  const bg = isSignedIn ? classes.whiteBg : classes.yellowBg;
  return (
    <AppBar               
        position="fixed"
        elevation={0}
        className={classes.appBar1}
      >
        <Toolbar className={`${classes.toolbar1} ${bg}`}>
        <div className={classes.navContainer}>
          {props.children}
        </div>
        </Toolbar>
    </AppBar>
  )
}