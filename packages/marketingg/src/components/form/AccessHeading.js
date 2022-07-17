import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    h1: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '48px',
      lineHeight: '42px',
      marginTop: '20px',
    },
 },
  
  h12: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '38px',
    lineHeight: '44px',
    marginTop: '20px',
  },
        
  infoLink: {
    marginTop: '25px',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
  },

  heading28: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
  },
    
  paragraph8: {
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '16px',

    marginTop: 0,
    marginBottom: '20px',
  },

  paragraph9: {
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',

    margin: '0 0 10px 0',
  },
  
  wNode725Ded3CE6D: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',

    width: '100%',
  },
    
  contactsWrap: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
        
    msGridColumn: 1,
    gridColumnStart: 1,
    msGridColumnSpan: 1,
    gridColumnEnd: 2,
    msGridRow: 1,
    gridRowStart: 1,
    msGridRowSpan: 1,
    gridRowEnd: 2,
  },
      
  contactLink: {
    marginBottom: '19px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
  },
      
  wNode725ed35E6: {
    //paddingTop: '50px',
    alignSelf: 'center',

    msGridColumn: 2,
    gridColumnStart: 2,
    msGridColumnSpan: 1,
    gridColumnEnd: 3,
    msGridRow: 1,
    gridRowStart: 1,
    msGridRowSpan: 1,
    gridRowEnd: 2,
  },
}))



function AccessHeading11() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id={classes.wNode725Ded3CE6D} className={classes.contactsWrap}>
        <h1 className={classes.heading28}>Get Early Access</h1>
        <p className={classes.paragraph8}>Apply below and we'll reach out to discuss upcoming private beta access!</p>
      </div>
    </React.Fragment>
  )
}

function AccessHeading12() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id={classes.wNode725Ded3CE6D} className={classes.contactsWrap}>
        <h1 className={`${classes.heading28} ${classes.h12}`}>Learn More</h1>
        <p className={classes.paragraph9}>Share your contact details below and a representative will provide more information on Mavata.</p>
      </div>
    </React.Fragment>
  )
}

function AccessHeading2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.wNode725ed35E6}>
        <div className={classes.infoLink}>
          <a to="mailto:info@mavata.com?subject=Early%20Access" className={classes.contactLink}>info@mavata.com</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export { AccessHeading11, AccessHeading12, AccessHeading2 };