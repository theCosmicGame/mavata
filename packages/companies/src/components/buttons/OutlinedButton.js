import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';
import PlusCircleBlue from '../../assets/img/icons/plus-circle-blue.png'

const PlusCircleIconMain = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
  margin: 0;
  padding: 0;
  vertical-align: middle;
`

const ButtonText = styled.span`
    margin-left: 6%;
    margin-bottom: 0px;
  
    font-family: Overpass;
    font-style: normal;
    font-weight: 700,
    font-size: 16px;
    align: left;
    /* identical to box height, or 133% */
    letter-spacing: -0.01em;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;

    @media screen and (max-width: 767px) {
      display: none;
    };
`

const useStyles = makeStyles((theme) => ({
  buttonsUl4: {
    display: 'inline-block',
    margin: '4px',
    padding: '0px',
  },

  outlinedButton5: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    align: 'center',
    width: '150px',

    padding: '11px 30px 9px 15px',
    height: '100%',
    marginBottom: '0px',

    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#08048C',
    borderRadius: '16px',

    backgroundColor: 'transparent',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '16px',
    fontWeight: 400,
    color: '#08048C!important',
    
    '&:hover': {
      marginLeft: '0px',
      // borderColor: 'transparent',
      // backgroundColor: '#08048C',
      // color: '#ffffff!important',
      borderWidth: '3px',
      boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      webkitTransform: 'translate(2px, 0px)',
      msTransform: 'translate(2px, 0px)',
      transform: 'translate(2px, 0px)',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },

  /* plusCircle */
  buttonPlusCircle5: {
    width: '20px',
    height: '20px',
    left: '50%',
    top: '50%',

    verticalAlign: 'middle',
  },

  hideButton5: {
    display: 'none!important',
  },

  divButton5: {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',

    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    minHeight: '35px',

    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
  
    margin: 0,
    padding: 0,
  },
}))

export default function OutlinedButton(props) {
  const classes = useStyles();

  return (
    <div className={props.isExpanded ? classes.divButton5 : classes.hideButton5}>
      <RouterLink to={props.to} className={classes.outlinedButton5} onClick={props.onClick}>
        <PlusCircleIconMain src={PlusCircleBlue} alt='add' />
        <ButtonText>{props.children}</ButtonText>
      </RouterLink>
    </div>
  )
}