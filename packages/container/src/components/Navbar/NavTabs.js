import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';

const useStyles = makeStyles((theme) => ({
  navLink: {
    margin: '2px',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 600,
    color: '#0c0a89',
    alignItems: 'center',
  },
  
  navLinkItem: {  
    padding: '3px', 
    margin: '2px',
    '&:hover': {
      border: '2px dashed #0c0a89',
    },
  },

  navActive: {
    backgroundColor: '#0c0a89',
    color: '#fff',
    border: 'none',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
    
  const linkMap = [
    ["All Companies", "/companies"],
    ["Company Profile", "/companies/last"],
    ["Settings", "/user/settings"]
  ];

  return (
    <React.Fragment>
      <div className={classes.navLink}>
        {linkMap.map(([title, url], index) => (
            <NavLink exact to={url} key={index} className={classes.navLink} activeClassName={classes.navActive}>
                <a className={`${classes.navLinkItem}`}>{title}</a>
            </NavLink>
        ))}
      </div>
    </React.Fragment>
  )
}