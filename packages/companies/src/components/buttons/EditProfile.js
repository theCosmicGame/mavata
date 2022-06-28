import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '../../assets/img/icons/edit.png'

const useStyles = makeStyles((theme) => ({
  buttonsUl4: {
    display: 'inline-block',
    margin: '4px',
    padding: '0px',
  },

  outlinedButton6: {
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

  
  wButton6: {
    minHeight: '35px',

    flex: '0 0 auto',

    display: 'inline-block',
    //padding: '11px 30px 11px 15px',
    margin: 0,
    width: '100%',

    verticalAlign: 'middle',

    // backgroundColor: '#0c0a89',
    // color: 'white',
    // borderColor: '#0c0a89',
    // borderRadius: '8px',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    
    '&:hover': {
      marginLeft: '0px',
      // backgroundColor: '#15113b',
      // color: '#fff',
      // boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      // webkitTransform: 'translate(2px, 0px)',
      // msTransform: 'translate(2px, 0px)',
      // transform: 'translate(2px, 0px)',
      textDecoration: 'none',
    },

    [theme.breakpoints.down('479')]: {
      maxWidth: '50px',
    },
  },


  /* plusCircle */
  editIconStyle: {
    width: '15px',
    height: '15px',
    left: '50%',
    top: '50%',

    verticalAlign: 'middle',

    [theme.breakpoints.down('479')]: {
      verticalAlign: 'top',
    },
  },

  /* Add a new company */
  buttonText: {
    width: '88px',
    height: '20px',
    marginLeft: '6%',
    marginTop: '5px',
    marginBottom: '5px',
    marginRight: 0,

    verticalAlign: 'center',
    color: '#08048C',
  
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    /* identical to box height, or 133% */
    letterSpacing: '-0.02em',
    /* Inside auto layout */
    flex: 'none',
    order: 2,
    flexGrow: 0,

    [theme.breakpoints.down('479')]: {
      display: 'none',
    },
  },

  divButton: {
    position: 'relative',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    align: 'center',
    width: '100px',

    margin: 0,
    padding: 0,
  },
}))

export default function EditProfile() {
  const classes = useStyles();

  return (
    <div className={classes.divButton}>
      <RouterLink to='/user/editprofile' className={classes.wButton6} >
        <img src={EditIcon} className={classes.editIconStyle} alt='add' /><span className={classes.buttonText}>Edit Profile</span>
      </RouterLink>
    </div>
  )
}