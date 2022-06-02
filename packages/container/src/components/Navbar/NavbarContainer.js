import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styling/NavStyle';
import { useLocation } from 'react-router-dom';

export default function NavbarContainer({ isSignedIn, ...props}) {
  const classes = useStyles();
  const path = useLocation().pathname;
  
  const bg = (!isSignedIn || (path == '/')) ? classes.yellowBg : classes.whiteBg;
  
  return (
    <AppBar               
        position="sticky"
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