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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    opacity: 1,
    fontFamily: ['Barlow', 'sans-serif'],
  },

  navItem: {
    margin: '0px',
    padding: '0px',
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
  },

  logo: {
    maxWidth: '80%',
    marginTop: '5px',
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
  },
    
  yellowBg: {
    backgroundColor: '#ffd343',
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
}));

export default useStyles