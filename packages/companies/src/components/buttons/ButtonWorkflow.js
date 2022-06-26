import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PlusCircle from '../../assets/img/icons/plus-circle-white.png'

const useStyles = makeStyles((theme) => ({
  buttonsUl4: {
    display: 'inline-block',
    margin: '4px',
    padding: '0px',
  },

  outlinedButton4: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    minWidth: '120px!important',

    marginTop: '20px',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#15113b',
    borderRadius: '16px',
    backgroundColor: 'transparent',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:hover': {
      marginLeft: '0px',
      borderColor: 'transparent',
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
    minHeight: '35px',

    flex: '0 0 auto',

    padding: '11px 30px 11px 15px',
    margin: '0 auto',
    
    align: 'center',
    verticalAlign: 'middle',

    backgroundColor: '#0c0a89',
    color: 'white',
    borderColor: '#0c0a89',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontWeight: 'bold',
    
    '&:hover': {
      marginLeft: '0px',
      borderColor: 'transparent',
      backgroundColor: '#15113b',
      boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      webkitTransform: 'translate(5px, 0px)',
      msTransform: 'translate(5px, 0px)',
      transform: 'translate(5px, 0px)',
      color: '#fff',
      textDecoration: 'none',
    },

    [theme.breakpoints.down('767')]: {
      maxWidth: '50px',
    },
  },


  /* plusCircle */
  buttonPlusCircle: {
    width: '20px',
    height: '20px',
    left: '50%',
    top: '50%',

    verticalAlign: 'middle',
  },

  /* Add a new company */
  buttonText: {
    marginLeft: '6%',
    marginTop: '5px',
    marginBottom: '5px',
  
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    /* identical to box height, or 133% */
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    /* Inside auto layout */
    flex: 'none',
    order: 2,
    flexGrow: 0,

    [theme.breakpoints.down('767')]: {
      display: 'none',
    },
  },

  divButton: {
    position: 'relative',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    display: 'flex',
    justifyContent: 'center',
    alginItems: 'center',
  },
}))

export default function ButtonWorkflow(props) {
  const classes = useStyles();

  return (
    <div className={classes.divButton}>
      <RouterLink to={props.to} className={classes.wButton4} onClick={props.onClick}>
        <img src={PlusCircle} className={classes.buttonPlusCircle} alt='add' /><span className={classes.buttonText}>{props.children}</span>
      </RouterLink>
    </div>
  )
}