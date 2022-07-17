import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputField from './InputField';

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

  emailForm: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    '@media screen and (max-width: 991px)': {
      width: '70%',
    },

    '@media screen and (max-width: 767px)': {
      width: '100%',
      minWidth: 'auto',
      paddingTop: '10px',
    },

    '@media screen and (max-width: 479px)': {
      display: 'block',
      textAlign: 'center',
    },
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
  
  wNode725Ded3CE6D: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
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
  },
      
  contactLink: {
    marginBottom: '19px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
  },
    
  wLayoutGrid: {
    display: '-ms-grid',
    display: 'grid',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridRowGap: '16px',
    gridColumnGap: '16px',
  },

  _2ColGrid: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitFlexWrap: 'wrap',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',

    paddingRight: '25px',
    paddingLeft: '0px',
  },
    
  contactV2: {
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'reverse',
    webkitFlexDirection: 'column-reverse',
    msFlexDirection: 'column-reverse',
    flexDirection: 'column-reverse',
    webkitFlexWrap: 'wrap',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    gridRowGap: '20px',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
  },
      
  messageWrap: {
    width: '100%',
  },
    
  wNode725ed35E6: {
    paddingTop: '50px',
    msGridColumn: 2,
    gridColumnStart: 2,
    msGridColumnSpan: 1,
    gridColumnEnd: 3,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
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

  ContactSection: {
    padding: '5px',
    margin: 0,
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.ContactSection}>
      <form data-name="Contact Form V2" name="wf-form-Contact-Form-V2" id={classes.emailForm} method="get" aria-label="Contact Form V2" data-hs-cf-bound="true">
        <div className={classes.wLayoutGrid}>
          <div className={`${classes._2ColGrid} ${classes.contactV2}`} >
            <InputField />
            <div id={classes.wNode725Ded3CE6D} className={classes.contactsWrap}>
              <h1 className={classes.heading28}>Get Early Access</h1>
              <p className={classes.paragraph8}>Apply below and we'll reach out to discuss upcoming private beta access!</p>
            </div>
          </div>
          <div id={classes.wNode725ed35E6} className={classes.messageWrap}>
            <div className={classes.infoLink}>
              <a to="mailto:info@mavata.com?subject=Early%20Access" className={classes.contactLink}>info@mavata.com</a>
            </div>
          </div>
        </div>
      </form>
      </div>
    </React.Fragment>
  );
};