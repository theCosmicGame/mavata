import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navLink: {
    
  },
}));

export default function NavTabs() {
  const classes = useStyles();
    
  const linkMap = [
    ["All Companies ", "/companies"],
    ["Company Profile ", "/companies/last"],
    ["Settings ", "/user/settings"]
  ];

  return (
    <React.Fragment>
      <div className={classes.navLink}>
        {linkMap.map(([title, url], index) => (
          <RouterLink to={url} key={index}>
              <a className={classes.navLink}>{title}</a>
          </RouterLink>
        ))}
      </div>
    </React.Fragment>
  )
}