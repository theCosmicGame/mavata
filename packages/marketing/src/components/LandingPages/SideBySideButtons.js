import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  darkBlue: {
    backgroundColor: '#0c0a89',
    color: '#fff',
    
    '&:hover': {
      backgroundColor: '#09d5b0',
    },
  },
  
  hoverTeal: {
    backgroundColor: '#ffd343',
    color: '#0c0a89',
    
    '&:hover': {
      backgroundColor: '#09d5b0',
      webkitTransform: 'translate(0px, -2px)',
      msTransform: 'translate(0px, -2px)',
      transform: 'translate(0px, -2px)',
      color: '#fff',
    },
  },

  displayBlock: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'center',
    borderRadius: '3px',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    color: '#000',
    fontSize: '16px',
    textTransform: 'uppercase',
  },
  
  sideBySideButtonContain: {
    position: 'static',
    bottom: '160px',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginBottom: '40px',
    paddingTop: '10px',
    paddingBottom: '16px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
  },
  
  wButton2: {
    display: 'inline-block',
    padding: '9px 15px',
    color: 'white',
    border: 0,
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: 0,
  },
  
  button8: {
    marginTop: '20px',
    borderRadius: '3px',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:hover': {
      webkitTransform: 'translate(0px, -2px)',
      msTransform: 'translate(0px, -2px)',
      transform: 'translate(0px, -2px)',
      textDecoration: 'none',
    },
  },
  
  outlinedButton2: {
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
    borderColor: '#15113b',
    borderRadius: '3px',
    backgroundColor: 'transparent',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:hover': {
      borderColor: '#ffd343',
      backgroundColor: '#ffd343',
      color: '#000',
      boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      textDecoration: 'none',
      webkitTransform: 'translate(0px, -2px)',
      msTransform: 'translate(0px, -2px)',
      transform: 'translate(0px, -2px)',
      textDecoration: 'none',
    },
    
    '&.displayBlock': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitBoxPack: 'justify',
      webkitJustifyContent: 'space-between',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      fontSize: '16px',
      
      '&:hover': {
        borderColor: '#09d5b0',
        backgroundColor: '#09d5b0',
        webkitTransform: 'none',
        msTransform: 'none',
        transform: 'none',
      },
    },
  },

  introButton2: {
    marginLeft: '15px',
    borderColor: '#15113b',
    borderRadius: '3px',
    color: '#0c0a89',
    
    '&:hover': {
      backgroundColor: '#15113b',
      webkitTransform: 'translate(0px, -3px)',
      msTransform: 'translate(0px, -3px)',
      transform: 'translate(0px, -3px)',
      color: '#fff',
    },
  },

  button1: {
    '&:hover': {

    },
  },

  button2: {
    '&:hover': {
      
    },
  },
}));

export default function Buttons() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.displayBlock}>
          <RouterLink to='/earlyaccess' className={`${classes.darkBlue} ${classes.button8} ${classes.wButton2}`}>Early Access</RouterLink>
          <RouterLink to='/learn' className={`${classes.outlinedButton2} ${classes.introButton2} ${classes.wButton2}`}>Learn More</RouterLink>
      </div>
    </React.Fragment>
  )
}