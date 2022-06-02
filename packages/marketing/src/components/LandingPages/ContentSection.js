import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  '@global': {

    footer: {
      backgroundColor: 'rgba(21, 17, 59, 1)', 
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      position: 'relative',
      width: '100%',
      maxWidth: 'none',
      padding: '30px 6%',
      paddingTop: '10px',
      paddingBottom: '10px',
      marginRight: '50px',
      backgroundColor: '#15113b',
      alignItems: 'center',
      webkitBoxOrient: 'horizontal',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'row',
      msFlexDirection: 'row',
      flexDirection: 'row',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      webkitTransition: 'all 300ms ease',
      transition: 'all 300ms ease',
    },
    section: {
      width: '100%',
    },
    // MUST KEEP
    html: {
      height: '100%',
    },
    h1: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '48px',
      lineHeight: '42px',
      marginTop: '20px',
    },
    h2: {
      fontWeight: 'bold',
      marginBottom: '10px',
        fontSize: '24px',
        lineHeight: '36px',
        marginTop: '20px',
    },
    h3: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '16px',
      lineHeight: '25px',
      marginTop: '10px',
    },

    a: {
      fontFamily: '"Playfair Display"',
      textDecoration: 'none',
    },

    p: {
      marginTop: 0,
      marginBottom: '20px',
    },
  },

  alignCenter: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    textAlign: 'center',
  },
      
  max800Px: {
    color: '#0c0a89',
    fontSize: '48px',
    lineHeight: '60px',
    maxWidth: 'none',
    fontFamily: ['Playfair Display', 'sans-serif'],
    textAlign: 'center',
  },
  
  section11: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    maxWidth: 'none',
    padding: '35px 6%',
    paddingTop: '10px',
    paddingBottom: '40px',
    webkitBoxOrient: 'horizontal',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
       
  yellowBg: {
    backgroundColor: '#ffd343',
  },

  container18: {
    width: 'auto',
    maxWidth: '1400px',
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '40px',
    position: 'relative',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
}));

export default function ContentSection(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <section className={`${classes.section11} ${classes.yellowBg}`}>
        <div className={classes.container18}>{props.children}</div>
      </section>
    </React.Fragment>
  )
};
