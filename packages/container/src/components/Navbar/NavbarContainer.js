import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styling/NavStyle';

export default function NavbarContainer(props) {
  const classes = useStyles();

  return (
    <AppBar               
        position="static"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          {props.children}
        </Toolbar>
    </AppBar>
  )
}