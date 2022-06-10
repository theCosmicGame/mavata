import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submitButton: {
    minHeight: '0px',
    marginLeft: '15px',
    padding: '5px 45px 0px',
    backgroundColor: '#0c0a89',
    fontFamily: ['Overpass', 'sans-serif'],
  },
    
  submitButton2: {
    paddingRight: '35px',
    paddingLeft: '35px',
    backgroundColor: '#0c0a89',
    fontWeight: 600,
  },

  button9: {
    marginTop: '20px',
    borderRadius: '3px',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    height: 'auto',
    
    '&:hover': {
      backgroundColor: '#15113b',
      webkitTransform: 'translate(0px, -2px)',
      msTransform: 'translate(0px, -2px)',
      transform: 'translate(0px, -2px)',
      color: '#fff',
      textDecoration: 'none',
    },
    
    '&.submitBtnContact2': {
      marginTop: '20px',
      backgroundColor: '#0c0a89',
      color: '#fff',
    },
    
    '&.submitBtnContact3': {
      marginTop: '20px',
      backgroundColor: '#15113b',
      color: '#fff',
    },
  },
  
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
    
    '&:Hover': {
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
    justifyContent: 'space-between',
    borderRadius: '3px',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    color: '#000',
    fontSize: '16px',
    textTransform: 'uppercase',
    
    '&:Hover': {
      marginLeft: '0px',
      backgroundColor: '#09d5b0',
      webkitTransform: 'none',
      msTransform: 'none',
      transform: 'none',
      color: '#15113b',
    },
  },
      
  submitBtnContact2: {
    marginTop: '20px',
    backgroundColor: '#15113b',
    color: '#fff',

    '@media screen and (max-width: 479px)': {
      minHeight: '45px',
      textAlign: 'center',
    },
  },
  
  wButton: {
    display: 'inline-block',
    padding: '9px 15px',
    backgroundColor: '#15113b',
    color: 'white',
    border: 0,
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',

    '@media screen and (max-width: 991px)': {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
  },
}));

export default function SubmitButton(props) {
  const classesSubmitButton = useStyles();

  return (
    <React.Fragment>
      <input type="submit" value="Send " data-wait="Please wait..." className={`${classesSubmitButton.button9} ${classesSubmitButton.submitBtnContact2} ${classesSubmitButton.wButton}`}></input>
    </React.Fragment>
  );
};