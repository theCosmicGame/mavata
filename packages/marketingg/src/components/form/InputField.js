import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    input: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      display: 'block',
      height: '28px',
      padding: '0px 12px',
      marginBottom: '10px',
      fontSize: '14px',
      lineHeight: '1.428571429',
      color: '#333333',
      verticalAlign: 'middle',
      backgroundColor: '#ffffff',
      border: '1px solid #cccccc',

      '&[type=text]': {
        width: '100%',
      },

      '&[type=email]': {
        width: '100%',
      },

      '&:focus': {
        borderColor: '#3898EC',
        outline: 0,
      },

      '&::placeholder': {
        fontFamily: ['Playfair Display', 'sans-serif'],
        color: '#999',
        opactiy: 1,
      },

      '&:-moz-placeholder': {
        fontFamily: ['Playfair Display', 'sans-serif'],
        color: '#999',
        opacity: 1,
      },

      '&:-ms-input-placeholder': {
        fontFamily: ['Playfair Display', 'sans-serif'],
        color: '#999',
        opacity: 1,
      },
      
      '&::-webkit-input-placeholder': {
        fontFamily: ['Playfair Display', 'sans-serif'],
        color: '#999',
        opacity: 1,
      },
    },
  },
  
  inputUl: {
    margin: '0px',
    padding: '0px',
  },

  wNode725ed31: {
    msGridColumn: 1,
    gridColumnStart: 1,
    msGridColumnSpan: 1,
    gridColumnEnd: 2,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
  },
  
  formFieldsWrap: {
    width: '100%',
    float: 'left',
  },

  formField: {
    height: '55px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#15113b',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 211, 67, 0.1)',
    
    '&:hover': {
      borderStyle: 'solid',
    },
    
    '&:active': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
    
    '&:focus': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
  },

  initialWhiteBg: {
    backgroundColor: '#fff',
    
    '&:hover': {
      borderStyle: 'solid',
      backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
    },
    
    '&:active': {
      borderStyle: 'solid',
      backgroundColor: '#ffd343',
    },
    
    '&:focus': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
  },

  messageField: {
    height: '185px',
    borderStyle: 'solid',
    
    '&:focus': {
      borderStyle: 'solid',
    },
    
    '&$initialWhiteBg': {
      paddingTop: '30px',
    },
  },
}));


export default function InputField(props) {
  const classes = useStyles();

  return (
    <div id={classes.wNode725ed31} className={classes.formFieldsWrap}>
      <ul className={classes.inputUl}><input type="text" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Full-Name" data-name="Full Name" placeholder="Full Name" id="Full-Name" required="" /></ul>
      <ul className={classes.inputUl}><input type="email" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Email-5" data-name="Email 5" placeholder="Email" id="Email-5" required="" /></ul>
      <ul className={classes.inputUl}><input type="text" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Firm" data-name="Firm" placeholder="Firm" id="Firm-2" required="" /></ul>
    </div>
  )
}