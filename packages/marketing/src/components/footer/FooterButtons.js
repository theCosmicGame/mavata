import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
    
    wButton3: {
      display: 'inline-block',
      padding: '9px 15px',
      color: 'white',
      border: 0,
      lineHeight: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer',
      borderRadius: 0,

      '@media screen and (max-width: 991px)': {
        paddingRight: '15px',
        paddingLeft: '15px',
      },
    },
    
    button3: {
      marginTop: '20px',
      borderRadius: '3px',
      backgroundColor: '#ffd343',
      webkitTransition: 'all 350ms ease',
      transition: 'all 350ms ease',
      fontFamily: ['Playfair Display', 'sans-serif'],
      color: '#000',
      fontSize: '16px',
      fontWeight: 400,
      textTransform: 'uppercase',
      
      '&:hover': {
        backgroundColor: '#15113b',
        webkitTransform: 'translate(0px, -2px)',
        msTransform: 'translate(0px, -2px)',
        transform: 'translate(0px, -2px)',
        color: '#fff',
        textDecoration: 'none',
      },
    },
    
    outlinedButton3: {
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
      borderColor: '#fff',
      borderRadius: '3px',
      backgroundColor: 'transparent',
      webkitTransition: 'all 350ms ease',
      transition: 'all 350ms ease',
      fontFamily: ['Playfair Display', 'sans-serif'],
      color: '#fff',
      fontSize: '16px',
      fontWeight: 400,
      textTransform: 'uppercase',
      
      '&:Hover': {
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
      
      '&.introButton': {
        marginLeft: '15px',
        borderColor: '#15113b',
        color: '#0c0a89',
        
        '&:Hover': {
          backgroundColor: '#15113b',
          webkitTransform: 'translate(0px, -3px)',
          msTransform: 'translate(0px, -3px)',
          transform: 'translate(0px, -3px)',
          color: '#fff',
        },

        '@media screen and (max-width: 479px)': {
          marginLeft: '0px',
          textAlign: 'center',
        },
      },
    },
    
    displayBlock2: {
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
    
    displayBlock3: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitBoxPack: 'justify',
      webkitJustifyContent: 'space-between',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      borderRadius: '3px',
      webkitTransition: 'all 350ms ease',
      transition: 'all 350ms ease',
      color: '#000',
      fontSize: '16px',
      textTransform: 'uppercase',
      
      '&:hover': {
        marginLeft: '0px',
        backgroundColor: '#09d5b0',
        webkitTransform: 'none',
        msTransform: 'none',
        transform: 'none',
        color: '#15113b',
      },
    },

    introButton3: {
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

    buttonArrow: {
      float: 'right',
    },
    
    footerButtonsContain: {
      width: '380px',
      marginLeft: '150px',
    },
}));

export default function FooterButtons() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.footerButtonsContain}>
          <RouterLink to='/earlyaccess' className={`${classes.button3} ${classes.displayBlock3} ${classes.wButton3}`}>Early Access <span className={classes.buttonArrow}>➝</span></RouterLink>
          <RouterLink to='/learn' className={`${classes.outlinedButton3} ${classes.displayBlock2} ${classes.wButton3}`}>Learn More <span className={classes.buttonArrow}>➝</span></RouterLink>
      </div>
    </React.Fragment>
  )
}