import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';

const useStyles = makeStyles((theme) => ({
  navLink: {
    margin: '10px',
    padding: '3px',
    fontSize: '20px',
    fontWeight: 600,
    color: '#0c0a89',
    alignItems: 'center',

    '&:hover': {
      borderBottom: '3px solid #0c0a89',
    },
  },

  navActive: {
    backgroundColor: '#0c0a89',
    borderRadius: '5px',
    padding: '7px 10px 10px 10px',
    color: '#fff',
    border: 'none',
    pointerEvents: 'none',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
    
  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"], // BEM TO DO: change to dropdown 
    ["Settings", "/user/settings"]
  ];

  return (
    <React.Fragment>
        {linkMap.map(([title, url], index) => (
            <NavLink exact to={url} key={index} className={classes.navLink} activeClassName={classes.navActive}>
                {title}
            </NavLink>
        ))}
    </React.Fragment>
  )
}