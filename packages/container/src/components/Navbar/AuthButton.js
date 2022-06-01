import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    margin: theme.spacing(1, 1.5),
  },
    
  outlinedButton4: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginTop: '20px',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '3px',
    borderColor: '#0c0a89',
    backgroundColor: 'transparent',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:hover': {
      marginLeft: '0px',
      borderColor: '#ffd343',
      backgroundColor: '#ffd343',
      boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      webkitTransform: 'translate(2px, 0px)',
      msTransform: 'translate(2px, 0px)',
      transform: 'translate(2px, 0px)',
      color: '#000',
      textDecoration: 'none',
    },
  },
  
  wButton4: {
    display: 'inline-block',
    padding: '9px 15px',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '2px',
  },
  
  darkOutline4: {
    marginTop: '0px',
    borderColor: '#0c0a89',
    color: '#0c0a89',
    fontWeight: 'bold',
    
    '&:hover': {
      borderColor: '#ffd343',
      backgroundColor: '#15113b',
      boxShadow: 'none',
      webkitTransform: 'translate(5px, 0px)',
      msTransform: 'translate(5px, 0px)',
      transform: 'translate(5px, 0px)',
      color: '#fff',
    },
  },
}));

export default function AuthButton({ isSignedIn, onSignOut }) {

  const onClick = () => {
    // && onSignOut function is ALWAYS TRUE
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  const classes = useStyles();

  return (
    <Button
      className={`${classes.darkOutline4} ${classes.wButton4} ${classes.outlinedButton4}`}
      component={RouterLink}
      to={isSignedIn ? '/' : '/auth/signin'}
      onClick={onClick}
    >
      {isSignedIn ? 'Logout' : 'Login'}
  </Button>
  )
}