import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

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
    backgroundColor: '#08048C',
    borderRadius: '8px',
    padding: '7px 10px 10px 10px',
    color: '#fff',
    border: 'none',
    pointerEvents: 'none',
  },

  navActive2: {
    paddingTop: '30px',
    borderBottom: '3px solid #08048C',
    borderRadius: '8px 16px 0px 0px',
    bottom: '0%',
  },
}));

export default function NavTabs({ linkMap }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavDiv>
        {linkMap.map(([title, url], index) => (
            <NavLink exact to={url} key={index} className={classes.navLink} activeClassName={classes.navActive2}>
                {title}
            </NavLink>
        ))}
      </NavDiv>
    </React.Fragment>
  )
}