import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  yellowBg: {
    backgroundColor: '#ffd343',
  },

  whiteBg: {
    backgroundColor: '#fff',
  },

  appBar1: {
    borderBottom: `1px solid #0c0a89`,
    marginBottom: '0px',
  },
  
  toolbar1: {
    height: '75px',
    
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    opacity: 1,
    fontFamily: ['Barlow', 'sans-serif'],

    '@media screen and (max-width: 991px)': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      padding: '0px 3%',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
  },

  navItem: {
    margin: '0px',
    padding: '0px',
  },

  navItemOptional: {
    '@media screen and (max-width: 479px)': {
      display: 'none!important',
    },
  },

  navItemSm: {
    '@media screen and (min-width: 767px)': {
      display: 'none!important',
    },
    '@media screen and (max-width: 766px)': {
      display: 'inline-block!important',
    },
  },

  navItemMd: {
    '@media screen and (min-width: 767px)': {
      display: 'inline-block!important',
    },
    '@media screen and (max-width: 766px)': {
      display: 'none!important',
    },
  },
  
  linkButton: {
    margin: theme.spacing(1, 1.5),
    display: 'inline-block',
    padding: '9px 15px',
    backgroundColor: '#3898EC',
    color: 'white',
    border: 0,
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: 0,
  },

  navbar2: {
    position: 'absolute',
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: 'auto',
    zIndex: 100,
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    minHeight: 'auto',
    marginTop: '0px',
    padding: '0px 6%',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd343',
    opacity: 1,
    fontFamily: ['Barlow', 'sans-serif'],
    
    '@media screen and (max-width: 991px)': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      padding: '0px 3%',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },

    '@media screen and (max-width: 767px)': {
      minHeight: 'auto',
      padding: '2px 3%',
    },
  },

  wNav: {
    position: 'relative',
    //background: '#dddddd',
    zIndex: 1000,
  
    '&:before': {
      content: '" "',
      display: 'table',
      gridColumnStart: 1,
      gridRowStart: 1,
      gridColumnEnd: 2,
      gridRowEnd: 2,
    },

    '&:after': {
      clear: 'both',
      content: '" "',
      display: 'table',
      gridColumnStart: 1,
      gridRowStart: 1,
      gridColumnEnd: 2,
      gridRowEnd: 2,
    },

    '&[data-collapse="all"]': {
      "&$wNavMenu": {
          display: 'none',
      },

      '&$wNavButton': {
          display: 'block',
      },
    },
  },

  wNavBrand: {
    position: 'relative',
    float: 'left',
    textDecoration: 'none',
    color: '#333333',
  },

  navContainer: {
    position: '-webkit-sticky',
    position: 'sticky',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    maxWidth: 'none',
    minHeight: 'auto',
    marginRight: '0px',
    marginLeft: '0px',
    paddingTop: '0px',
    paddingRight: '0%',
    paddingLeft: '0%',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    
    opacity: 1,
    fontFamily: ['Barlow', 'sans-serif'],

    '@media screen and (max-width: 991px)': {
      width: '100%',
      maxHeight: '65px',
      maxWidth: '100%',
      minHeight: '65px',
      paddingRight: '0%',
      paddingLeft: '0%',
    },

    '@media screen and (max-width: 767px)': {
      minHeight: 'auto',
    },
  },
  
  wNavMenu: {
    position: 'relative',
    float: 'right',
  },
    
  wNavButton: {
    position: 'relative',
    float: 'right',
    padding: '18px',
    fontSize: '24px',
    display: 'none',
    cursor: 'pointer',
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    
    '&:focus': {
      outline: 0,
    },
    
    '&:open': {
      backgroundColor: '#C8C8C8',
      color: 'white',
    },
  },
    
  brand2: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    height: '75px',
    padding: '0px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',

    '@media screen and (max-width: 991px)': {
      verticalAlign: 'middle',
      width: '152px',
    },

    '@media screen and (max-width: 767px)': {
      height: 'auto',
    },
  },

  logo: {
    maxWidth: '80%',
    marginTop: '5px',

    '@media screen and (max-width: 767px)': {
      maxWidth: '80%',
    },
  },
    
  section11: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    maxWidth: 'none',
    padding: '95px 6%',
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
    
    '&.yellowBg': {
      backgroundColor: '#ffd343',
    },
    
    '&.contactV2Section': {
      backgroundColor: '#ffd343',
    },

    '@media screen and (max-width: 991px)': {
      padding: '50px 5% 65px',
    },
  },

  wButton: {
    display: 'inline-block',
    padding: '9px 15px',
    backgroundColor: '#3898EC',
    color: 'white',
    border: 0,
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: 0,
  },
  
  buttonsUl: {
    display: 'inline-block',
    margin: '4px',
    padding: '0px',
  },
  
  outlinedButton: {
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
      
  introButton: {
    marginLeft: '15px',
    borderColor: '#15113b',
    color: '#0c0a89',
    
    '&:hover': {
      backgroundColor: '#15113b',
      webkitTransform: 'translate(0px, -3px)',
      msTransform: 'translate(0px, -3px)',
      transform: 'translate(0px, -3px)',
      color: '#fff',
    },
  },

  darkOutline: {
    marginTop: '0px',
    borderColor: '#0c0a89',
    color: '#0c0a89',
    fontWeight: 'bold',

    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#15113b',
      boxShadow: 'none',
      webkitTransform: 'translate(5px, 0px)',
      msTransform: 'translate(5px, 0px)',
      transform: 'translate(5px, 0px)',
      color: '#fff',
    },
  },

  dropdownLink: {
    display: 'none',
    color: '#0c0a89',

    '@media screen and (max-width: 767px)': {
      display: 'block',
    },
  },

  dropdownMenu: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    '& < li': {
      margin: '0 1rem',
      overflow: 'hidden',
    },
    
    '@media (max-width: 767px)': {
      position: 'absolute',
      top: 0,
      marginTop: '50px',
      left: 0,
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
      '& > li': {
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '0.5em 0',
        width: '100%',
        color: 'white',
        backgroundColor: '#222',
      },

      '& > li:not(:last-child)': {
        borderBottom: '1px solid #444',
      },
    },
  },

  dropdownMenuLi: {
    margin: '0 1rem',
    overflow: 'hidden',

    '@media (max-width: 767px)': {
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: '0.5em 0',
      width: '100%',
      color: 'white',
      backgroundColor: '#222',

      '&:not(:last-child)': {
        borderBottom: '1px solid #444',
      },
    },
  },

  dropdownMenuContainer: {
    display: 'none',
    height: '100%',
    width: '30px',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 767px)': {
      display: 'flex',
    },
  },

  menuToggle: {
    display: 'none',

    '&:checked': {
      marginTop: '0px',
      transform: 'rotate(405deg)',
    },

    '&:checked + $dropdownMenuContainer': {
      backgroundColor: "#ccc"
    },

    '&:checked + $dropdownMenuContainer &$dropdownMenuButton': {
      background: 'rgba(255, 255, 255, 0)',
    },

    '&:checked + $dropdownMenuContainer &$dropdownMenuButton::after': {
      marginTop: '0px',
      transform: 'rotate(-405deg)',
    },

    '@media (max-width: 767px)': {
      '& ~ $dropdownMenuLi': {
        height: 0,
        margin: 0,
        padding: 0,
        border: 0,
        transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1)',
      },

      '&:checked ~ $dropdownMenuLi': {
        border: '1px solid #333',
        height: '2.5em',
        padding: '0.5em',
        transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },

  dropdownMenuButton: {
    display: 'block',
    backgroundColor: '#fff',
    position: 'absolute',
    height: '4px',
    width: '30px',
    transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: '2px',

    '&::before': {
      display: 'block',
      backgroundColor: '#fff',
      position: 'absolute',
      height: '4px',
      width: '30px',
      transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)',
      borderRadius: '2px',

      content: '',
      marginTop: '-8px',
    },
    '&::after': {
      display: 'block',
      backgroundColor: '#fff',
      position: 'absolute',
      height: '4px',
      width: '30px',
      transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)',
      borderRadius: '2px',

      content: '',
      marginTop: '8px',
    },

    '&::before &$menuToggle:checked': {
      marginTop: '0px',
      transform: 'rotate(405deg)',
    },

    '&$menuToggle:checked + $dropdownMenuContainer': {

    },
  },

  navSelect: {
    background: '#000 !important',
  },

}));


export default function NavbarContainer({ isSignedIn, ...props}) {
  const classes = useStyles();
  const path = useLocation().pathname;
  const onPath = ((path == '/') || (path == '/learn') || (path == '/earlyaccess'))
  const bg = onPath ? classes.yellowBg : classes.whiteBg;
  
  return (
    <AppBar               
        position="sticky"
        elevation={0}
        className={classes.appBar1}
      >
        <Toolbar className={`${classes.toolbar1} ${bg}`}>
        <div className={classes.navContainer}>
          {props.children}
        </div>
        </Toolbar>
    </AppBar>
  )
}
