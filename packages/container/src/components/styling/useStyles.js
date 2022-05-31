import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '@font-face': {
        fontFamily: 'Barlow',
        src: 'https://fonts.googleapis.com/css2?family=Barlow&display=swap',
        fontWeight: '400'
      },

    input: {
      '&$wButton': {
        webkitAppearance: 'button',
      },
    },

    html: {
      height: '100%',
    },
    
    body: {
      margin: 0,
      minHeight: '100%',
      backgroundColor: '#fff',
      fontFamily: ['Arial', 'sans-serif'],
      fontSize: '14px',
      lineHeight: '20px',
      color: '#333',
    },
          
    img: {
      maxWidth: '100%',
      verticalAlign: 'middle',
      display: 'inline-block',
    },

    h1: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '38px',
      lineHeight: '44px',
      marginTop: '20px',
    },

    h2: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '32px',
      lineHeight: '36px',
      marginTop: '20px',
    },

    h3: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '24px',
      lineHeight: '30px',
      marginTop: '20px',
    },

    h4: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '18px',
      lineHeight: '24px',
      marginTop: '10px',
    },

    h5: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '14px',
      lineHeight: '20px',
      marginTop: '10px',
    },

    h6: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '12px',
      lineHeight: '18px',
      marginTop: '10px',
    },

    p: {
      marginTop: 0,
      marginBottom: 0,
    },

    blockquote: {
      margin: '0 0 10px 0',
      padding: '10px 20px',
      borderLeft: '5px solid #E2E2E2',
      fontSize: '18px',
      lineHeight: '22px',
    },
    
    figure: {
      margin: 0,
      marginBottom: '10px',
    },
    
    figcaption: {
      marginTop: '5px',
      textAlign: 'center',
    },
    
    ul: {
      marginTop: '0px',
      marginBottom: '10px',
      paddingLeft: '40px',
    },
    
    ol: {
      marginTop: '0px',
      marginBottom: '10px',
      paddingLeft: '40px',
    },
  },
  
  wNav: {
    position: 'relative',
    background: '#dddddd',
    zIndex: 1000,
    
    '&:Before': {
      content: '" "',
      display: 'table',
      gridColumnStart: 1,
      gridRowStart: 1,
      gridColumnEnd: 2,
      gridRowEnd: 2,
    },

    '&:After': {
      clear: 'both',
      content: '" "',
      display: 'table',
      gridColumnStart: 1,
      gridRowStart: 1,
      gridColumnEnd: 2,
      gridRowEnd: 2,
    },
    
    '&[data-animation="over-left"]': {
      '&$wNavOverlay': {
        width: 'auto',
      },
      
      '&[data-nav-menu-open]': {
        right: 'auto',
        zIndex: 1,
        top: 0,
      },
    },
    
    '&[data-animation="over-right"]': {
      '&$wNavOverlay': {
        width: 'auto',
      },
      
      '&[data-nav-menu-open]': {
        left: 'auto',
        zIndex: 1,
        top: 0,
      },
    },
    
    '&[data-collapse="all"]': {
      '&$wNavMenu': {
          display: 'none',
      },
      
      '&$wNavButton': {
          display: 'block',
      },
    },
  },

  wNavOverlay: {
    position: 'absolute',
    overflow: 'hidden',
    display: 'none',
    top: '100%',
    left: 0,
    right: 0,
    width: '100%',
    
    '&[data-nav-menu-open]': {
      top: 0,
    },
  },
  
  wNavBrand: {
    position: 'relative',
    float: 'left',
    textDecoration: 'none',
    color: '#333333',
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
    
    '&:Focus': {
      outline: 0,
    },
    
    '&:Open': {
      backgroundColor: '#C8C8C8',
      color: 'white',
    },
  },

  wNavMenu: {
    position: 'relative',
    float: 'right',
  },
  
  '[data-nav-menu-open]': {
    display: 'block !important',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#C8C8C8',
    textAlign: 'center',
    overflow: 'visible',
    minWidth: '200px',
  },
  
  wNavLink: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    textDecoration: 'none',
    color: '#222222',
    padding: '20px',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',

    '&:Current': {
      color: '#0082f3',
    },

    '&:Open': {
      display: 'block',
      position: 'relative',
    },
  },

  
wDropdown: {
	display: 'inline-block',
	position: 'relative',
	textAlign: 'left',
	marginLeft: 'auto',
	marginRight: 'auto',
	zIndex: 900,
},

wDropdownBtn: {
  position: 'relative',
	verticalAlign: 'top',
	textDecoration: 'none',
	color: '#222222',
	padding: '20px',
	textAlign: 'left',
	marginLeft: 'auto',
	marginRight: 'auto',
	whiteSpace: 'nowrap',
},

wDropdownToggle: {
  position: 'relative',
	verticalAlign: 'top',
	textDecoration: 'none',
	color: '#222222',
	padding: '20px',
	textAlign: 'left',
	marginLeft: 'auto',
	marginRight: 'auto',
	whiteSpace: 'nowrap',

  webkitUserSelect: 'none',
  mozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  paddingRight: '40px',
  
  '&:Focus': {
    outline: 0,
  },
},

wDropdownLink: {
	position: 'relative',
	verticalAlign: 'top',
	textDecoration: 'none',
	color: '#222222',
	padding: '20px',
	textAlign: 'left',
	marginLeft: 'auto',
	marginRight: 'auto',
	whiteSpace: 'nowrap',

  padding: '10px 20px',
  display: 'block',
  color: '#222222',
  
  '&:Current': {
    color: '#0082f3',
  },
  
  '&:Focus': {
    outline: 0,
  },
},

wDropdownList: {
	position: 'absolute',
	background: '#dddddd',
	display: 'none',
	minWidth: '100%',
  
  '&:Open': {
    display: 'block',
  },
},

wIconDropdownToggle: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  marginRight: '20px',
  width: '1em',
  height: '1em',
},

  buttonsUl: {
    display: 'inline-block',
    margin: '4px',
    padding: '0px',
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
  
  wCheckbox: {
    display: 'block',
    marginBottom: '5px',
    paddingLeft: '20px',
    
    '&::Before': {
      content: '" "',
      display: 'table',
      msGridColumnSpan: 1,
      gridColumnEnd: 2,
      msGridColumn: 1,
      gridColumnStart: 1,
      msGridRowSpan: 1,
      gridRowEnd: 2,
      msGridRow: 1,
      gridRowStart: 1,
    },
    
    '&::After': {
      content: '" "',
      display: 'table',
      msGridColumnSpan: 1,
      gridColumnEnd: 2,
      msGridColumn: 1,
      gridColumnStart: 1,
      msGridRowSpan: 1,
      gridRowEnd: 2,
      msGridRow: 1,
      gridRowStart: 1,
      clear: 'both',
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
  
  wCheckboxInput: {
    float: 'left',
    marginBottom: '0px',
    marginLeft: '-20px',
    marginRight: '0px',
    marginTop: '4px',
    lineHeight: 'normal',
    
    "&.inputTypeCustom": {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderTopColor: '#ccc',
      borderBottomColor: '#ccc',
      borderLeftColor: '#ccc',
      borderRightColor: '#ccc',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      width: '12px',
      height: '12px',
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',

      '&.redirected': {
        '&:Checked': {
          backgroundColor: '#3898ec',
          borderTopColor: '#3898ec',
          borderBottomColor: '#3898ec',
          borderLeftColor: '#3898ec',
          borderRightColor: '#3898ec',
          backgroundImage: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
          '&:Focus': {
            boxShadow: '0px 0px 3px 1px #3898ec',
          },
        },
      },
    },
  },
  
  heading: {
    textAlign: 'center',
  },
  
  heading2: {
    marginBottom: '0px',
    fontSize: '36px',
  },
  
  paragraph: {
    marginTop: '20px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#222',
    fontSize: '18px',
    lineHeight: '27px',
  },
  
  body: {
    color: '#222',
  },
  
  textSpan: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  textSpan2: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  textSpan3: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  textSpan4: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  textSpan5: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  divBlock: {
    paddingTop: '40px',
    paddingBottom: '0px',
    border: '1px none #45aec8',
  },
  
  boldText: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText2: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText3: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  boldText4: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText5: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  boldText6: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText7: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText8: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText9: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText10: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  boldText11: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText12: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText13: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText14: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText15: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText16: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    lineHeight: '42px',
    fontWeight: 600,
  },
  
  boldText17: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 500,
  },
  
  boldText18: {
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#000',
    fontSize: '48px',
  },
  
  utilityPageWrap: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    maxHeight: '100%',
    maxWidth: '100%',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
  
  utilityPageContent: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '260px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    textAlign: 'center',
  },
  
  utilityPageForm: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxAlign: 'stretch',
    webkitAlignItems: 'stretch',
    msFlexAlign: 'stretch',
    alignItems: 'stretch',
  },
  
  container: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    maxWidth: '1100px',
    webkitBoxPack: 'start',
    webkitJustifyContent: 'flex-start',
    msFlexPack: 'start',
    justifyContent: 'flex-start',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
  
  navbar: {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '0px',
    backgroundColor: '#fff',
  },
  
  divBlock2: {
    display: 'block',
    marginLeft: '18px',
  },
  
  navLink: {
    fontFamily: ['Arial', 'Helvetica Neue', Helvetica, 'sans-serif'],
    
    '&:Current': {
      fontFamily: ['Overpass', 'sans-serif'],
      color: '#000',
    },
  },
  
  navLink2: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    
    '&:Current': {
      paddingTop: '23px',
    },
  },
  
  divBlock3: {
    display: 'block',
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
  },
  
  list: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxPack: 'end',
    webkitJustifyContent: 'flex-end',
    msFlexPack: 'end',
    justifyContent: 'flex-end',
    listStyleType: 'none',
  },
  
  image: {
    display: 'block',
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
    webkitBoxFlex: 0,
    webkitFlex: '0 0 auto',
    msFlex: '0 0 auto',
    flex: '0 0 auto',
  },
  
  listItem: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    alignSelf: 'center',
    webkitBoxFlex: 0,
    webkitFlex: '0 auto',
    msFlex: '0 auto',
    flex: '0 auto',
  },
  
  link2: {
    padding: '9px 9px 6px',
    border: '1px none #000',
    fontFamily: ['Overpass', 'sans-serif'],
    lineHeight: '14px',
    fontWeight: 700,
    textDecoration: 'none',
  },
  
  button: {
    marginRight: '10px',
    marginLeft: '10px',
    padding: '13px 50px 9px',
    backgroundColor: '#0c0a89',
    boxShadow: '1px 1px 3px 0 #000',
    fontFamily: ['Overpass', 'sans-serif'],
    fontWeight: 600,
  },
  
  button2: {
    marginRight: '10px',
    marginLeft: '10px',
    paddingTop: '12px',
    paddingBottom: '8px',
    border: '1px solid #0c0a89',
    backgroundColor: '#fff',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    lineHeight: '20px',
    fontWeight: 600,
  },
  
  heading3: {
    fontFamily: ['Open Sans', 'sans-serif'],
    textAlign: 'center',
  },
  
  container2: {
    maxWidth: '1100px',
  },
  
  section: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    minHeight: '85vh',
  },
  
  container3: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    maxWidth: '1100px',
    webkitBoxAlign: 'stretch',
    webkitAlignItems: 'stretch',
    msFlexAlign: 'stretch',
    alignItems: 'stretch',
    webkitAlignSelf: 'stretch',
    msFlexItemAlign: 'stretch',
    alignSelf: 'stretch',
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
  },
  
  columns: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    webkitAlignSelf: 'stretch',
    msFlexItemAlign: 'stretch',
    alignSelf: 'stretch',
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
    backgroundColor: '#fff',
  },
  
  image2: {
    display: 'inline-block',
  },
  
  column: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
    webkitBoxFlex: 0,
    webkitFlex: '0 auto',
    msFlex: '0 auto',
    flex: '0 auto',
    textAlign: 'center',
  },
  
  column2: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
  },
  
  textBlock: {
    marginBottom: '10px',
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '42px',
    lineHeight: '1.2em',
  },
  
  boldText19: {
    color: '#45aec8',
  },
  
  boldText20: {
    color: '#45aec8',
  },
  
  textBlock2: {
    paddingTop: '20px',
    paddingBottom: '20px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '18px',
    lineHeight: '22px',
  },
  
  formBlock: {
    display: 'block',
    marginBottom: '40px',
  },
  
  form: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginTop: '25px',
  },
  
  submitButton: {
    minHeight: '0px',
    marginLeft: '15px',
    padding: '5px 45px 0px',
    backgroundColor: '#0c0a89',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  textField: {
    minHeight: '45px',
    marginBottom: '0px',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '1px solid #0c0a89',
    borderRadius: '2px',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  section2: {
    backgroundColor: '#0c0a89',
  },
  
  container4: {
    maxWidth: '1100px',
    paddingTop: '80px',
  },
  
  heading4: {
    marginBottom: '0px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 700,
  },
  
  heading5: {
    marginBottom: '20px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#fff',
    fontSize: '64px',
    lineHeight: '68px',
    fontWeight: 700,
    textAlign: 'left',
  },
  
  textBlock3: {
    marginTop: '10px',
    marginBottom: '10px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#fff',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 300,
    textAlign: 'justify',
  },
  
  columns2: {
    display: 'block',
    marginTop: '30px',
    webkitBoxAlign: 'start',
    webkitAlignItems: 'flex-start',
    msFlexAlign: 'start',
    alignItems: 'flex-start',
  },
  
  textSpan6: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  textSpan7: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontWeight: 700,
  },
  
  textSpan8: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  textSpan9: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  textSpan10: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  button3: {
    display: 'inline-block',
    minHeight: '45px',
    marginTop: '1px',
    marginRight: '15px',
    padding: '15px 30px 7px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#fff',
    backgroundColor: 'rgba(56, 152, 236, 0)',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  button4: {
    position: 'relative',
    top: '-2px',
    overflow: 'visible',
    minHeight: '45px',
    marginTop: '-1px',
    marginBottom: '2px',
    padding: '14px 30px 7px',
    backgroundColor: '#45aec8',
    fontFamily: ['Overpass', 'sans-serif'],
    fontWeight: 700,
    oObjectFit: 'fill',
    objectFit: 'fill',
  },
  
  section3: {
    paddingBottom: '120px',
    backgroundImage: 'linear-gradient(173deg, rgba(69, 174, 200, 0.24), #fff 32%)',
  },
  
  heading6: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    lineHeight: '24px',
  },
  
  heading7: {
    marginBottom: '50px',
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#000',
    fontSize: '48px',
    fontWeight: 600,
  },
  
  columns3: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginTop: '15px',
    webkitBoxOrient: 'horizontal',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    webkitFlexWrap: 'nowrap',
    msFlexWrap: 'nowrap',
    flexWrap: 'nowrap',
    webkitBoxAlign: 'stretch',
    webkitAlignItems: 'stretch',
    msFlexAlign: 'stretch',
    alignItems: 'stretch',
    webkitAlignContent: 'flex-start',
    msFlexLinePack: 'start',
    alignContent: 'flex-start',
  },
  
  column3: {
    left: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '0px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'stretch',
    webkitJustifyContent: 'stretch',
    msFlexPack: 'stretch',
    justifyContent: 'stretch',
    justifyItems: 'start',
    webkitAlignContent: 'center',
    msFlexLinePack: 'center',
    alignContent: 'center',
    gridAutoFlow: 'row',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr',
    gridTemplateColumns: '1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    border: '1px none #e5e5e5',
    backgroundColor: 'hsla(0, 0%, 100%, 0)',
  },
  
  heading8: {
    marginTop: '0px',
    paddingTop: '7px',
    webkitBoxFlex: 0,
    webkitFlex: '0 auto',
    msFlex: '0 auto',
    flex: '0 auto',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '21px',
    lineHeight: '22px',
  },
  
  textBlock4: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
    lineHeight: '28px',
  },
  
  column4: {
    display: 'block',
    height: '100%',
    padding: '0px',
    webkitBoxOrient: 'horizontal',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitFlexWrap: 'wrap',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    webkitBoxAlign: 'stretch',
    webkitAlignItems: 'stretch',
    msFlexAlign: 'stretch',
    alignItems: 'stretch',
    webkitAlignContent: 'flex-start',
    msFlexLinePack: 'start',
    alignContent: 'flex-start',
    msGridRowAlign: 'stretch',
    alignSelf: 'stretch',
    webkitBoxFlex: 0,
    webkitFlex: '0 0 auto',
    msFlex: '0 0 auto',
    flex: '0 0 auto',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    border: '1px none #e5e5e5',
    oObjectFit: 'fill',
    objectFit: 'fill',
  },
  
  column5: {
    padding: '0px',
    border: '1px none #e5e5e5',
  },
  
  divBlock4: {
    position: 'relative',
    display: 'block',
    height: '100.000074%',
    marginRight: '5px',
    marginLeft: '5px',
    padding: '20px',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
  },
  
  container5: {
    maxWidth: '1100px',
  },
  
  section4: {
    paddingTop: '120px',
    paddingBottom: '0px',
    backgroundImage: `url('../../images/bgtile.png')`,
    backgroundPosition: '0px 0px',
    backgroundSize: 'auto',
  },
  
  container6: {
    maxWidth: '1100px',
  },
  
  heading9: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    lineHeight: '24px',
  },
  
  heading10: {
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#000',
    fontSize: '48px',
    fontWeight: 600,
  },
  
  image3: {
    marginBottom: '10vw',
  },
  
  columns4: {
    marginTop: '65px',
  },
  
  heading11: {
    fontSize: '24px',
  },
  
  heading12: {
    marginTop: '10px',
    color: '#0c0a89',
    fontSize: '22px',
  },
  
  image4: {
    marginBottom: '15px',
  },
  
  textBlock5: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'left',
  },
  
  divBlock5: {
    marginTop: '7vw',
  },
  
  section5: {
    paddingTop: '35px',
    backgroundColor: '#0c0a89',
  },
  
  container7: {
    maxWidth: '1100px',
  },
  
  list2: {
    display: '-ms-grid',
    display: 'grid',
    paddingBottom: '10px',
    paddingLeft: '0px',
    gridAutoColumns: '1fr',
    gridColumnGap: '10px',
    gridRowGap: '16px',
    msGridColumns: '1fr 1.25fr 0.75fr 1fr 1fr',
    gridTemplateColumns: '1fr 1.25fr 0.75fr 1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
  },
  
  listItem2: {
    webkitAlignSelf: 'flex-start',
    msFlexItemAlign: 'start',
    alignSelf: 'flex-start',
  },
  
  textBlock6: {
    paddingRight: '0px',
    paddingLeft: '7px',
    borderStyle: 'none none none solid',
    borderWidth: '2px 2px 3px 3px',
    borderColor: '#45aec8',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#fff',
    fontSize: '16px',
    lineHeight: '28px',
  },
  
  section6: {
    paddingTop: '15px',
    paddingBottom: '0px',
    backgroundColor: 'rgba(69, 174, 200, 0.15)',
  },
  
  container8: {
    maxWidth: '1100px',
  },
  
  heading13: {
    marginBottom: '10px',
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#000',
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 600,
  },
  
  heading14: {
    marginBottom: '0px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontWeight: 600,
  },
  
  textBlock7: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
    lineHeight: '28px',
  },
  
  column6: {
    paddingRight: '30px',
  },
  
  column7: {
    paddingRight: '30px',
  },
  
  button5: {
    marginTop: '25px',
    marginRight: '20px',
    paddingRight: '35px',
    paddingLeft: '35px',
    border: '2px solid #0c0a89',
    backgroundColor: '#0c0a89',
    color: '#f5f5f5',
  },
  
  button6: {
    padding: '10px 35px',
    backgroundColor: '#0c0a89',
    color: '#fff',
  },
  
  columns5: {
    marginBottom: '25px',
  },
  
  footer: {
    paddingTop: '60px',
    paddingBottom: '40px',
    webkitBoxAlign: 'start',
    webkitAlignItems: 'flex-start',
    msFlexAlign: 'start',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  
  footerFlexContainer: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    maxWidth: '1100px',
    marginBottom: '20px',
    paddingBottom: '20px',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    borderBottom: '1px solid #e5e5e5',
    textAlign: 'left',
  },
  
  footerLogoLink: {
    minWidth: '60px',
    webkitBoxFlex: 0,
    webkitFlex: '0 auto',
    msFlex: '0 auto',
    flex: '0 auto',
  },
  
  footerImage: {
    width: '100%',
    marginBottom: '25px',
    oObjectFit: 'contain',
    objectFit: 'contain',
    oObjectPosition: '0% 50%',
    objectPosition: '0% 50%',
  },
  
  footerHeading: {
    marginTop: '0px',
    marginBottom: '20px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  
  footerLink: {
    display: 'block',
    marginBottom: '10px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#444',
    fontSize: '12px',
    textDecoration: 'none',
    
    '&:Hover': {
      textDecoration: 'underline',
    },
  },
  
  container9: {
    maxWidth: '1100px',
  },
  
  divBlock6: {
    webkitAlignSelf: 'flex-start',
    msFlexItemAlign: 'start',
    alignSelf: 'flex-start',
  },
  
  textBlock8: {
    marginBottom: '7px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '12px',
  },
  
  list3: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
  },
  
  textBlock9: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '18px',
  },
  
  link: {
    textDecoration: 'none',
  },
  
  list4: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginTop: '20px',
    marginBottom: '30px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    fontSize: '18px',
  },
  
  textBlock10: {
    padding: '10px 15px 10px 10px',
    fontSize: '12px',
  },
  
  link2: {
    paddingLeft: '15px',
    borderLeft: '2px solid #000',
    color: '#000',
    fontSize: '12px',
    textDecoration: 'none',
  },
  
  listItem3: {
    paddingRight: '15px',
  },
  
  listItem5: {
    display: 'none',
  },
  
  listItem6: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
  
  boldText21: {
    display: 'block',
    textAlign: 'center',
  },
  
  textSpan11: {
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 700,
  },
  
  textSpan12: {
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 700,
  },
  
  listItem7: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem8: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem9: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem10: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem11: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem12: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem13: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem14: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem15: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  listItem16: {
    marginBottom: '5px',
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
    fontWeight: 400,
  },
  
  listItem17: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '18px',
  },
  
  list5: {
    listStyleType: 'square',
  },
  
  italicText: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '20px',
    fontStyle: 'normal',
  },
  
  boldText22: {
    fontSize: '20px',
  },
  
  textSpan13: {
    color: '#45aec8',
    fontWeight: 700,
  },
  
  heading15: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '27px',
    fontWeight: 400,
  },
  
  container10: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  
  submitButton2: {
    paddingRight: '35px',
    paddingLeft: '35px',
    backgroundColor: '#0c0a89',
    fontWeight: 600,
  },
  
  heading16: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontSize: '21px',
    fontWeight: 400,
  },
  
  textField2: {
    maxWidth: '500px',
  },
  
  textField3: {
    maxWidth: '500px',
  },
  
  textField4: {
    maxWidth: '500px',
  },
  
  container11: {
    maxWidth: '1100px',
    marginTop: '40px',
    marginBottom: '40px',
    paddingLeft: '5px',
  },
  
  heading17: {
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '28px',
    lineHeight: '1.2em',
    fontWeight: 600,
    textAlign: 'left',
  },
  
  heading18: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontSize: '22px',
    fontWeight: 400,
  },
  
  submitButton3: {
    paddingRight: '35px',
    paddingLeft: '35px',
    backgroundColor: '#0c0a89',
    fontFamily: ['Overpass', 'sans-serif'],
    fontWeight: 600,
  },
  
  textField5: {
    maxWidth: '500px',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  textField6: {
    maxWidth: '500px',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  textField7: {
    maxWidth: '500px',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  textField8: {
    maxWidth: '500px',
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  heading19: {
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: ['Open Sans', 'sans-serif'],
    textAlign: 'center',
  },
  
  textBlock11: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#222',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'left',
  },
  
  heading20: {
    marginTop: '10px',
    marginBottom: '10px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '24px',
    fontWeight: 600,
  },
  
  container12: {
    marginBottom: '40px',
  },
  
  section7: {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: 'rgba(69, 174, 200, 0.15)',
    color: 'rgba(69, 174, 200, 0.15)',
  },
  
  heading21: {
    marginBottom: '10px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#45aec8',
    fontSize: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  
  heading22: {
    marginTop: '0px',
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#000',
    fontSize: '36px',
    fontWeight: 600,
    textAlign: 'center',
  },
  
  paragraph2: {
    marginTop: '10px',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#000',
    fontSize: '18px',
    lineHeight: '1.5em',
    textAlign: 'center',
  },
  
  columns6: {
    marginTop: '30px',
  },
  
  section8: {
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  
  column12: {
    textAlign: 'center',
  },
  
  image6: {
    marginBottom: '30px',
  },
  
  paragraph3: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontSize: '20px',
    lineHeight: '1.5em',
  },
  
  section9: {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#f7f7f7',
    backgroundImage: 'none',
    backgroundSize: 'auto',
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#fff',
  },
  
  heading23: {
    marginBottom: '0px',
    color: '#45aec8',
    fontSize: '24px',
    textAlign: 'center',
  },
  
  heading24: {
    marginTop: '0px',
    marginBottom: '30px',
    fontFamily: ['Open Sans', 'sans-serif'],
    fontSize: '45px',
    lineHeight: '1.2em',
    fontWeight: 600,
    textAlign: 'center',
  },
  
  paragraph4: {
    marginBottom: '20px',
    color: '#000',
    fontSize: '18px',
    lineHeight: '1.5em',
    textAlign: 'left',
  },
  
  list6: {
    marginBottom: '20px',
    fontSize: '18px',
    lineHeight: '1.5em',
    listStyleType: 'decimal',
  },
  
  listItem18: {
    marginBottom: '10px',
  },
  
  container13: {
    maxWidth: '1100px',
  },
  
  container14: {
    maxWidth: '1100px',
  },
  
  container15: {
    maxWidth: '1100px',
    textAlign: 'center',
  },
  
  paragraph5: {
    color: '#0c0a89',
    fontSize: '18px',
    lineHeight: '1.5em',
    textAlign: 'center',
  },
  
  heading25: {
    marginTop: '30px',
    marginBottom: '20px',
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '36px',
    fontWeight: 600,
    textAlign: 'center',
  },
  
  list7: {
    display: '-ms-grid',
    display: 'grid',
    paddingTop: '20px',
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr',
    gridColumnGap: '21px',
    gridRowGap: '16px',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    textAlign: 'left',
    listStyleType: 'none',
  },
  
  listItem19: {
    paddingRight: '30px',
    paddingLeft: '5px',
    borderLeft: '3px solid #45aec8',
    color: '#0c0a89',
    fontSize: '18px',
    lineHeight: '1.5em',
  },
  
  paragraph6: {
    display: 'block',
    marginTop: '30px',
    paddingRight: '20px',
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
    color: '#0c0a89',
    fontSize: '18px',
  },
  
  button7: {
    position: 'static',
    display: 'inline-block',
    minHeight: '45px',
    margin: '20px auto 10px',
    paddingTop: '12px',
    paddingRight: '35px',
    paddingLeft: '35px',
    clear: 'none',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    border: '1px solid #0c0a89',
    backgroundColor: '#45aec8',
    color: '#0c0a89',
    fontSize: '14px',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  
  paragraph7: {
    paddingTop: '10px',
    color: '#0c0a89',
    fontSize: '18px',
    textAlign: 'center',
  },
  
  link3: {
    color: '#000',
    textShadow: '0 2px 2px rgba(0, 0, 0, 0.19)',
  },
  
  container16: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    maxWidth: '1100px',
    marginTop: '30px',
    padding: '30px 20px',
    webkitBoxOrient: 'horizontal',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitFlexWrap: 'nowrap',
    msFlexWrap: 'nowrap',
    flexWrap: 'nowrap',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    webkitAlignContent: 'flex-start',
    msFlexLinePack: 'start',
    alignContent: 'flex-start',
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    backgroundColor: 'rgba(69, 174, 200, 0.15)',
  },
  
  container17: {
    maxWidth: '1100px',
    padding: '20px',
    backgroundColor: '#fff',
  },
  
  submitButton4: {
    backgroundColor: '#0c0a89',
  },
  
  heading26: {
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '36px',
    lineHeight: '1.2em',
    fontWeight: 400,
  },
  
  fieldLabel: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '18px',
    fontWeight: 400,
  },
  
  fieldLabel2: {
    fontFamily: ['Overpass', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '18px',
    fontWeight: 400,
  },
  
  form2: {
    fontFamily: ['Overpass', 'sans-serif'],
  },
  
  boldText23: {
    fontFamily: ['Overpass', 'sans-serif'],
    fontWeight: 400,
  },
  
  textBlock12: {
    fontFamily: ['Arial', 'Helvetica Neue', Helvetica, 'sans-serif'],
  },
  
  boldText24: {
    fontWeight: 600,
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
    borderColor: '#fff',
    borderRadius: '3px',
    backgroundColor: 'transparent',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#fff',
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:Hover': {
      marginLeft: '0px',
      borderColor: '#ffd343',
      backgroundColor: '#ffd343',
      boxShadow: '1px 1px 12px 0 rgba(0, 0, 0, 0.08)',
      webkitTransform: 'translate(2px, 0px)',
      msTransform: 'translate(2px, 0px)',
      transform: 'translate(2px, 0px)',
      color: '#000',
      textDecoration: 'none',
    },
    
    '&.introButton': {
      marginLeft: '15px',
      borderColor: '#15113b',
      color: '#0c0a89',
      
      '&:Hover': {
        backgroundColor: '#15113b',
        webkitTransform: 'translate(0px, -3px)',
        msTransform: 'translate(0px, -3px)',
        transform: 'translate(0px, -3px)',
        color: '#fff',
      },
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
      
      '&:Hover': {
        borderColor: '#09d5b0',
        backgroundColor: '#09d5b0',
        webkitTransform: 'none',
        msTransform: 'none',
        transform: 'none',
      },
    },
    
    '&.darkOutline': {
      marginTop: '0px',
      borderColor: '#15113b',
      color: '#0c0a89',
      
      '&:Hover': {
        borderColor: '#ffd343',
        backgroundColor: '#15113b',
        boxShadow: 'none',
        webkitTransform: 'translate(5px, 0px)',
        msTransform: 'translate(5px, 0px)',
        transform: 'translate(5px, 0px)',
        color: '#fff',
      },
    },
  },
  
  introHeroP: {
    maxWidth: '450px',
    marginTop: '10px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 300,
  },
  
  socialLinksWrapper: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginTop: '20px',
    marginLeft: '0px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    
    '&.justifyStart': {
      webkitBoxPack: 'start',
      webkitJustifyContent: 'flex-start',
      msFlexPack: 'start',
      justifyContent: 'flex-start',
    },
  },
  
  max300Px: {
    maxWidth: '300px',
  },
  
  section10: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    maxWidth: 'none',
    padding: '50px 6%',
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
    
    '&.footerSection': {
      position: 'relative',
      paddingTop: '10px',
      paddingBottom: '10px',
      backgroundColor: '#15113b',
      webkitTransition: 'all 300ms ease',
      transition: 'all 300ms ease',
    },
    
    '&.introHero': {
      position: 'relative',
      overflow: 'hidden',
      height: '120vh',
      maxHeight: '1200px',
      minHeight: 'auto',
      paddingTop: '10%',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'start',
      webkitJustifyContent: 'flex-start',
      msFlexPack: 'start',
      justifyContent: 'flex-start',
    },
  },
  
  container18: {
    width: '100%',
    maxWidth: '1400px',
    marginTop: '10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontFamily: ['Playfair Display', 'sans-serif'],
    
    '&.megaNavContainer': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
    },
    
    '&.flex': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
    },
    
    '&.flexCenteredVertical': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    '&.relativeContainer': {
      position: 'relative',
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
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
  
  footerColumn: {
    borderTop: '1px solid hsla(0, 0%, 96.9%, 0.2)',
    fontSize: '16px',
  },
  
  socialLink: {
    marginRight: '8px',
    marginLeft: '8px',
    padding: '6px',
    borderRadius: '4px',
    backgroundColor: 'rgba(9, 213, 176, 0.2)',
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    
    '&:Hover': {
      backgroundColor: 'rgba(9, 213, 176, 0.5)',
    },
    
    '&.firstLink': {
      marginLeft: '0px',
    },
  },
  
  footerCtaWrap: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
  },
  
  introHeading: {
    maxWidth: '450px',
    marginTop: '0px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '60px',
    lineHeight: '68px',
    textAlign: 'left',
  },
  
  sideBySideButtonContain: {
    position: 'static',
    bottom: '160px',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginBottom: '40px',
    paddingTop: '10px',
    paddingBottom: '16px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
  
  _4ColGrid: {
    paddingTop: '20px',
    paddingBottom: '20px',
    gridColumnGap: '35px',
    gridRowGap: '0px',
    msGridColumns: '1fr 1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    msGridRows: 'auto',
    gridTemplateRows: 'auto',
  },
  
  pagesGrid: {
    paddingTop: '60px',
    gridColumnGap: '30px',
    gridRowGap: '60px',
    msGridRows: 'auto auto auto',
    gridTemplateRows: 'auto auto auto',
    
    '&.login': {
      msGridRows: 'auto auto',
      gridTemplateRows: 'auto auto',
    },
  },
  
  copyrightsLink: {
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    color: '#fff',
    textDecoration: 'none',
    
    '&:Hover': {
      color: '#09d5b0',
    },
  },
  
  footerLink2: {
    display: 'block',
    paddingTop: '8px',
    paddingBottom: '8px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#fff',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    
    '&:Hover': {
      textDecoration: 'underline',
    },
  },
  
  introHeroImage: {
    position: 'absolute',
    left: 'auto',
    top: '66px',
    right: '-4%',
    bottom: 'auto',
    zIndex: 1,
    width: '50vw',
    maxWidth: '1400px',
    padding: '25px 100px 0px 0px',
  },
  
  button8: {
    marginTop: '20px',
    borderRadius: '3px',
    backgroundColor: '#ffd343',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
    textTransform: 'uppercase',
    
    '&:Hover': {
      backgroundColor: '#15113b',
      webkitTransform: 'translate(0px, -2px)',
      msTransform: 'translate(0px, -2px)',
      transform: 'translate(0px, -2px)',
      color: '#fff',
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
    
    '&.darkBlue': {
      backgroundColor: '#0c0a89',
      color: '#fff',
      
      '&:Hover': {
        backgroundColor: '#09d5b0',
      },
    },
    
    '&.topMargin': {
      marginTop: '24px',
      color: '#15113b',
      
      '&:Hover': {
        color: '#fff',
      },
    },
    
    '&.hoverTeal': {
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
  
  max500: {
    maxWidth: '500px',
  },
  
  divider: {
    height: '80px',
    
    '&.150Px': {
      height: '150px',
    },
  },
  
  footerButtonsContain: {
    width: '380px',
    marginLeft: '150px',
  },
  
  copyrights: {
    color: '#fff',
    fontSize: '16px',
    textAlign: 'left',
  },
  
  footerTitle: {
    paddingTop: '8px',
    paddingBottom: '8px',
    color: '#15113b',
    fontWeight: 600,
    
    '&.whiteText': {
      paddingTop: '8px',
      paddingBottom: '8px',
      color: '#fff',
      fontSize: '20px',
      fontWeight: 700,
    },
  },
  
  whiteText: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#fff',
    fontSize: '20px',
  },
  
  subHeadingLarge: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 300,
    
    '&.intro': {
      marginRight: 'auto',
      marginBottom: '0px',
      marginLeft: 'auto',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontFamily: ['Barlow', 'sans-serif'],
      color: '#0c0a89',
      fontSize: '20px',
      textAlign: 'center',
    },
    
    '&.centeredAligned': {
      maxWidth: '750px',
      marginTop: '20px',
      fontFamily: ['Barlow', 'sans-serif'],
      color: '#0c0a89',
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
    },
    
    '&.centeredAligned': {
      maxWidth: '800px',
      marginTop: '10px',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: '0px',
      color: '#0c0a89',
      fontSize: '20px',
      fontStyle: 'normal',
      textAlign: 'center',
    },
  },
  
  introYellowElement: {
    position: 'absolute',
    left: 'auto',
    top: 'auto',
    right: '0%',
    bottom: '0%',
    width: '100%',
    maxHeight: 'none',
    paddingLeft: '80px',
  },
  
  landingPageContain: {
    overflow: 'auto',
    height: '320px',
    marginTop: '30px',
    borderRadius: '5px',
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    
    '&:Hover': {
      boxShadow: '1px 1px 13px 0 rgba(0, 0, 0, 0.09)',
    },
  },
  
  contentContain: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'start',
    webkitAlignItems: 'flex-start',
    msFlexAlign: 'start',
    alignItems: 'flex-start',
    
    '&.relative': {
      position: 'relative',
      zIndex: 1,
    },
    
    '&.alignCentered': {
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
  },

  dropdownList: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: 'auto',
    
    '&:Open': {
      position: 'absolute',
      left: '0%',
      top: '98%',
      right: 'auto',
      bottom: 'auto',
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '100vw',
      padding: '36px 90px',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#ffd343',
    },
  },
  
  navLinksWrapper: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    color: '#0c0a89',
  },
  
  megaMenuMainContent: {
    paddingLeft: '100px',
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
  },
  
  navMenu: {
    position: 'static',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  
  megaNavPointer: {
    position: 'absolute',
    left: '25%',
    top: 'auto',
    right: '0%',
    bottom: '-30%',
    display: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '2px',
    backgroundColor: '#ffd343',
    webkitTransform: 'rotate(45deg)',
    msTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)',
  },
  
  mobileMenu: {
    display: 'none',
  },
  
  megaMenuSubTitle: {
    borderBottom: '1px solid #15113b',
  },
  
  noMargin: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  
  navbar2: {
    position: 'fixed',
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
  
  megaNavLink: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    color: '#15113b',
    textDecoration: 'none',
    
    '&:Hover': {
      opacity: '0.31',
      webkitTransform: 'scale(1.02)',
      msTransform: 'scale(1.02)',
      transform: 'scale(1.02)',
      textDecoration: 'none',
    },
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
  },
  
  _2ColGrid: {
    width: '100%',
    marginBottom: '0px',
    gridColumnGap: '30px',
    gridRowGap: '60px',
    msGridRows: 'auto',
    gridTemplateRows: 'auto',
    
    '&.megaNavLinks': {
      paddingTop: '15px',
      gridRowGap: '10px',
      msGridRows: 'auto auto auto',
      gridTemplateRows: 'auto auto auto',
      
      '&.Pages': {
        msGridColumns: '1fr 1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
      },
      
      '&.About': {
        msGridColumns: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr',
        msGridRows: 'auto auto auto auto auto',
        gridTemplateRows: 'auto auto auto auto auto',
      },
      
      '&.withSidePadding': {
        paddingRight: '90px',
        paddingLeft: '90px',
      },
      
      '&.contactV2': {
        gridRowGap: '20px',
        msGridRows: 'auto auto',
        gridTemplateRows: 'auto auto',
      },
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
  
  megaMenuTitleBox: {
    width: '20%',
    maxWidth: 'none',
  },
  
  menuItemsWrap: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
  
  dropdown: {
    position: 'static',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    height: '75px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderTop: '4px solid rgba(255, 211, 67, 0)',
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    color: '#15113b',
    fontSize: '16px',
    fontWeight: 300,
    
    '&:Hover': {
      borderTopColor: '#ffd343',
    },
  },
  
  writtenContent: {
    webkitBoxFlex: 1,
    webkitFlex: 1,
    msFlex: 1,
    flex: 1,
  },
  
  navLink3: {
    position: 'relative',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    height: '75px',
    padding: '9px 15px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderTop: '4px solid rgba(255, 211, 67, 0)',
    webkitTransition: 'all 300ms ease',
    transition: 'all 300ms ease',
    color: '#15113b',
    fontSize: '16px',
    fontWeight: 300,
    textDecoration: 'none',
    
    '&:Hover': {
      borderTop: '4px solid #ffd343',
      textDecoration: 'none',
    },
    
    '&:Active': {
      borderTopColor: '#ffd343',
    },
  
    '&:Current': {
      color: '#15113b',
      fontWeight: 300,
    },
  },
  
  hamburgerWrap: {
    display: 'none',
  },
  
  dropdownToggle: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    height: '75px',
    padding: '9px 15px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    color: '#15113b',
  },
  
  megaNavIconWrap: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    height: '60px',
    marginRight: '24px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderStyle: 'none',
    borderWidth: '1px',
    borderColor: '#15113b',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
  
  card: {
    position: 'relative',
    width: 'auto',
    padding: '50px 24px 33px',
    borderRadius: '8px',
    backgroundColor: '#8ef0de',
    boxShadow: '1px 1px 13px 0 rgba(0, 0, 0, 0.07)',
  },
  
  _3ColCardsContain: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    paddingTop: '20px',
  },
  
  cardIcon: {
    position: 'absolute',
    left: '24px',
    top: '-10%',
    right: 'auto',
    bottom: 'auto',
    
    '&.tallerIcon': {
      top: '-13%',
    },
  },
  
  keepLeftMobileLandscape: {
    height: '100px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 300,
    textAlign: 'left',
  },
  
  _24Px: {
    fontSize: '24px',
    
    '&.alignLeftMobileLandscape': {
      marginTop: '10px',
      fontFamily: ['Playfair Display', 'sans-serif'],
      color: '#0c0a89',
      fontSize: '22px',
      textAlign: 'left',
    },
    
    '&.alignLeftMobileLandscape': {
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
    },
  },
  
  _3ColGrid: {
    width: '100%',
    gridAutoFlow: 'row',
    gridColumnGap: '20px',
    gridRowGap: '0px',
    gridTemplateAreas: '"Area Area Area"',
    msGridColumns: '1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    msGridRows: 'auto',
    gridTemplateRows: 'auto',
  },
  
  boldTextSpan: {
    lineHeight: '35px',
    fontWeight: 700,
  },
  
  quoteAuthor: {
    paddingTop: '10px',
    fontSize: '16px',
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
  
  quote: {
    fontSize: '16px',
    lineHeight: '22px',
    
    '&.largeQuote': {
      fontSize: '36px',
      lineHeight: '42px',
      fontWeight: 300,
    },
  },
  
  circleImageWrap: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    backgroundImage: `url('../../images/mockup-of-a-woman-with-a-heather-t-shirt-sitting-against-a-wooden-background-28752-1-1.png')`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    webkitTransform: 'skew(0deg, 0deg)',
    msTransform: 'skew(0deg, 0deg)',
    transform: 'skew(0deg, 0deg)',
  },
  
  quoteLogo: {
    paddingTop: '4px',
  },
  
  max600Px: {
    width: 'auto',
    maxWidth: '600px',
    textAlign: 'center',
  },
  
  logoContain: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    marginBottom: '36px',
    paddingTop: '36px',
    
    '&.25PercentWrap': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '25%',
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
  
  textLinkDark: {
    paddingTop: '14px',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#15113b',
    fontWeight: 700,
    textDecoration: 'none',
    
    '&:Hover': {
      paddingLeft: '5px',
      color: '#15113b',
      fontWeight: 700,
    },
  },
  
  heading27: {
    marginBottom: '20px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '30px',
  },
  
  popUpContain: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    zIndex: 120,
    display: 'block',
    paddingRight: '2%',
    paddingBottom: '2.5%',
    paddingLeft: '2%',
    opacity: 1,
    webkitTransform: 'none',
    msTransform: 'none',
    transform: 'none',
    textDecoration: 'none',
  },
  
  popUp: {
    position: 'relative',
    left: '0px',
    bottom: '0px',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    height: 'auto',
    maxWidth: '475px',
    minWidth: 'auto',
    padding: '24px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'justify',
    webkitJustifyContent: 'space-between',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    webkitBoxAlign: 'start',
    webkitAlignItems: 'flex-start',
    msFlexAlign: 'start',
    alignItems: 'flex-start',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 26px 0 rgba(0, 0, 0, 0.07)',
    opacity: 1,
  },
  
  newsletterTitleContain: {
    display: 'block',
    width: '95%',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'start',
    webkitAlignItems: 'flex-start',
    msFlexAlign: 'start',
    alignItems: 'flex-start',
  },
  
  popUpHeading: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    
    '&.18Px': {
      fontFamily: ['Barlow', 'sans-serif'],
      color: '#0c0a89',
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  
  closeLine: {
    width: '2px',
    height: '15px',
    backgroundColor: '#e9ecf5',
    webkitTransform: 'translate(0px, -3px) rotate(45deg)',
    msTransform: 'translate(0px, -3px) rotate(45deg)',
    transform: 'translate(0px, -3px) rotate(45deg)',
    
    '&.darkClose': {
      height: '30px',
      backgroundColor: '#09d5b0',
    },
    
    '&.line2': {
      webkitTransform: 'translate(-2px, -3px) rotate(-45deg)',
      msTransform: 'translate(-2px, -3px) rotate(-45deg)',
      transform: 'translate(-2px, -3px) rotate(-45deg)',
      
      '&.darkClose': {
        backgroundColor: '#09d5b0',
      },
    },
  },
  
  closeWrapper: {
    position: 'absolute',
    left: '0%',
    top: '0%',
    right: 'auto',
    bottom: 'auto',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    padding: '11px 15px 8px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    
    '&.newsletterClose': {
      left: 'auto',
      top: '0%',
      right: '0%',
      bottom: 'auto',
      padding: '24px 30px 17px 17px',
      cursor: 'pointer',
    },
  },
  
  h4: {
    position: 'relative',
    padding: '0px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontWeight: 700,
  },
  
  formCheckboxGrid: {
    msGridColumns: '1fr 1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    msGridRows: 'auto',
    gridTemplateRows: 'auto',
  },
  
  contactLink: {
    marginBottom: '19px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
  },
  
  fieldCheckbox: {
    marginBottom: '2rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0px',
    borderBottom: '3px solid #15113b',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    textAlign: 'left',
  },
  
  formField: {
    height: '55px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#15113b',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 211, 67, 0.1)',
    
    '&:Hover': {
      borderStyle: 'solid',
    },
    
    '&:Active': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
    
    '&:Focus': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
    
    '&.initialWhiteBg': {
      backgroundColor: '#fff',
      
      '&:Hover': {
        borderStyle: 'solid',
        backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
      },
      
      '&:Active': {
        borderStyle: 'solid',
        backgroundColor: '#ffd343',
      },
      
      '&:Focus': {
        borderStyle: 'solid',
        borderColor: '#15113b',
        backgroundColor: '#ffd343',
      },
    },
    
    '&.messageField': {
      height: '185px',
      borderStyle: 'solid',
      
      '&:Focus': {
        borderStyle: 'solid',
      },
      
      '&.initialWhiteBg': {
        paddingTop: '30px',
      },
    },
  },
  
  checkbox: {
    width: '9%',
    marginLeft: '0px',
    paddingTop: '37px',
  },
  
  fieldLabel3: {
    marginBottom: '0px',
    color: '#0c0a89',
    fontSize: '16px',
    lineHeight: '1em',
    fontWeight: 400,
    
    '&.fieldLabelCheckbox': {
      width: '90%',
    },
  },
  
  contactForm2: {
    paddingTop: '20px',
  },
  
  col: {
    overflow: 'hidden',
    paddingRight: '1.5rem',
    paddingLeft: '0rem',
  },
  
  message: {
    display: 'inline-block',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid #1d2630',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '14px',
    
    '&.messageError': {
      paddingTop: '0.5rem',
      paddingRight: '0.75rem',
      paddingLeft: '0.75rem',
      backgroundColor: '#f06b4a',
    },
  },
  
  messageContainer: {
    marginTop: '0px',
    padding: '0px',
    backgroundColor: 'transparent',
    textAlign: 'left',
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
  
  heading28: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
  },
  
  paragraph8: {
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '16px',
  },
  
  navLink4: {
    fontWeight: 400,
    
    '&:Current': {
      color: '#0c0a89',
      fontSize: '16px',
      fontWeight: 300,
    },
  },
  
  updated: {
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#15113b',
    fontWeight: 400,
  },
  
  richText: {
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#15113b',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'justify',
  },
  
  h42: {
    position: 'relative',
    padding: '0px',
    color: '#15113b',
    fontWeight: 700,
  },
  
  contactLink2: {
    marginBottom: '19px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
  },
  
  fieldCheckbox2: {
    marginBottom: '2rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0px',
    borderBottom: '3px solid #15113b',
    color: '#15113b',
    textAlign: 'left',
  },
  
  fieldLabel4: {
    marginBottom: '0px',
    color: '#15113b',
    fontSize: '16px',
    lineHeight: '1em',
    fontWeight: 400,
    
    '&.fieldLabelCheckbox': {
      width: '90%',
    },
  },
  
  message2: {
    display: 'inline-block',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid #1d2630',
    
    '&.messageError': {
      paddingTop: '0.5rem',
      paddingRight: '0.75rem',
      paddingLeft: '0.75rem',
      backgroundColor: '#f06b4a',
    },
  },
  
  heading29: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
  },
  
  paragraph9: {
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
  },
  
  image7: {
    width: '65px',
    maxWidth: '65px',
  },
  
  introHeroImage2: {
    position: 'absolute',
    left: 'auto',
    top: '66px',
    right: '-4%',
    bottom: 'auto',
    zIndex: 1,
    width: '65vw',
    maxWidth: '1400px',
    padding: '20px 25px',
  },
  
  relativeHeroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
    color: '#fff',
  },
    
  alignCenter: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    textAlign: 'center',
    margin: '0px',
    padding: '0px',
  },

  alignCenter2: {
    textAlign: 'center',
    color: '#0c0a89',
    
    '&.whiteText': {
      color: '#0c0a89',
      marginTop: '10px',
      fontFamily: ['Barlow', 'sans-serif'],
      fontSize: '18px',
      fontWeight: 300,
    },
    
    '&.max800Px': {
      maxWidth: 'none',
      margin: '0px auto',
      paddingTop: '0px',
      paddingBottom: '10px',
      fontSize: '50px',
      lineHeight: '68px',
    },
  },
      
  max800Px: {
    maxWidth: '800px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontSize: '60px',

    paddingTop: '0px',
    paddingBottom: '10px',
    lineHeight: '68px',
  },
  
  card2: {
    position: 'relative',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    padding: '50px 24px 33px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#8ef0de',
    boxShadow: '1px 1px 13px 0 rgba(0, 0, 0, 0.07)',
  },
  
  _5CardContainer: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  
  submitButton5: {
    marginLeft: '0px',
    borderRadius: '3px',
    backgroundColor: '#15113b',
    webkitTransition: 'all 350ms ease',
    transition: 'all 350ms ease',
    fontFamily: ['Playfair Display', 'sans-serif'],
    textTransform: 'uppercase',
    
    '&:Hover': {
      marginRight: '-10px',
      marginLeft: '0px',
      backgroundColor: '#15113b',
      boxShadow: '1px 1px 13px 0 rgba(0, 0, 0, 0.08)',
      webkitTransform: 'translate(5px, 0px)',
      msTransform: 'translate(5px, 0px)',
      transform: 'translate(5px, 0px)',
      color: '#fff',
    },
    
    '&.emailFormBlockButton': {
      marginLeft: '0px',
    },
  },
  
  emailFormBlock: {
    width: 'auto',
    minWidth: '600px',
    paddingTop: '30px',
  },
  
  tick: {
    maxWidth: 'none',
    marginRight: '12px',
    marginLeft: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    fontWeight: 300,
  },
  
  textField9: {
    height: '45px',
    marginBottom: '0px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#15113b rgba(21, 17, 59, 0) #15113b #15113b',
    borderRadius: '3px 0px 0px 3px',
    
    '&:Hover': {
      borderColor: 'rgba(21, 17, 59, 0)',
      backgroundColor: 'rgba(255, 211, 67, 0.1)',
    },
    
    '&:Active': {
      borderStyle: 'solid',
      borderColor: '#15113b',
      backgroundColor: '#ffd343',
    },
    
    '&:Focus': {
      borderColor: '#15113b rgba(21, 17, 59, 0) #15113b #15113b',
      backgroundColor: '#ffd343',
    },
  },
  
  emailForm: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
  },
  
  ticksContain: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    paddingTop: '10px',
    backgroundColor: '#f1f1f1',
  },
  
  ticksContain2: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    maxWidth: '600px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    color: '#0c0a89',
    textAlign: 'center',
  },
  
  ['@media screen and (max-width: 991px)']: {
    navbar: {
      paddingLeft: '10px',
    },
    
    button: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    section: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    textBlock: {
      fontSize: '45px',
      lineHeight: '1.3em',
    },
    
    container4: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    heading5: {
      lineHeight: '1.1em',
    },
    
    heading7: {
      lineHeight: '1.1em',
    },
    
    container5: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    section4: {
      paddingRight: '0px',
      paddingLeft: '0px',
    },
    
    container6: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    heading10: {
      lineHeight: '1.1em',
    },
    
    section5: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    list2: {
      msGridColumns: '1fr 1.25fr 0.75fr',
      gridTemplateColumns: '1fr 1.25fr 0.75fr',
    },
    
    section6: {
      paddingTop: '50px',
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    footer: {
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    
    listItem6: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      webkitBoxFlex: 0,
      webkitFlex: '0 auto',
      msFlex: '0 auto',
      flex: '0 auto',
    },
    
    section7: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    section9: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    outlinedButton: {
      display: 'inline-block',
      
      '&.mobileLogin': {
        marginTop: '0px',
        paddingTop: '10px',
      },
      
      '&.darkOutline': {
        display: 'none',
      },
    },
    
    introHeroP: {
      maxWidth: 'none',
    },
    
    max300Px: {
      maxWidth: 'none',
    },
    
    section10: {
      padding: '50px 5% 65px',
      
      '&.introHero': {
        height: 'auto',
        maxHeight: '1030px',
        minHeight: '1024px',
        paddingTop: '13%',
        paddingBottom: '30px',
      },
      
      '&.megaNavContainer': {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
        webkitBoxAlign: 'start',
        webkitAlignItems: 'flex-start',
        msFlexAlign: 'start',
        alignItems: 'flex-start',
      },
    },
    
    footerCtaWrap: {
      width: '100%',
    },
    
    introHeading: {
      maxWidth: 'none',
    },
    
    introHeroImage: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      right: '-16%',
      bottom: '0%',
      zIndex: 1,
      width: '80vw',
      marginTop: '-50px',
      
      '&.150Px': {
        height: '100px',
      },
    },
    
    footerButtonsContain: {
      width: '360px',
      marginLeft: '12px',
    },
    
    introYellowElement: {
      position: 'absolute',
      paddingLeft: '20px',
    },
    
    subLinksContain: {
      display: 'block',
    },
    
    dropdownList: {
      '&:Open': {
        position: 'absolute',
        top: '64%',
        zIndex: 1000,
      },
    },
    
    navLinksWrapper: {
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxAlign: 'start',
      webkitAlignItems: 'flex-start',
      msFlexAlign: 'start',
      alignItems: 'flex-start',
    },
    
    arrowContain: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      marginTop: '-13px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    megaMenuMainContent: {
      position: 'static',
      width: '100%',
      paddingLeft: '0px',
      webkitBoxFlex: 0,
      webkitFlex: '0 auto',
      msFlex: '0 auto',
      flex: '0 auto',
    },
    
    mobileNavLink: {
      width: '100%',
      color: '#15113b',
      textDecoration: 'none',
      cursor: 'pointer',
      
      '&:Hover': {
        opacity: '0.6',
        textDecoration: 'none',
      },
    },
    
    navMenu: {
      position: 'absolute',
      overflow: 'auto',
      width: '100vw',
      marginTop: '84px',
      padding: '10px 60px 20px',
      backgroundColor: '#ffd343',
    },
    
    expandHeading: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '100%',
      webkitBoxPack: 'justify',
      webkitJustifyContent: 'space-between',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
    },
    
    hamburgerLine: {
      width: '25px',
      height: '1px',
      marginTop: '6px',
      marginBottom: '6px',
      padding: '0px',
      backgroundColor: '#15113b',
    },
    
    mobileMenu: {
      position: 'absolute',
      left: '0%',
      top: '0%',
      right: '0%',
      bottom: '0%',
      zIndex: 130,
      display: 'block',
      overflow: 'auto',
      minHeight: '100vh',
      marginTop: '65px',
      padding: '0px',
      backgroundColor: '#ffd343',
      webkitTransform: 'translate(-100%, 0px)',
      msTransform: 'translate(-100%, 0px)',
      transform: 'translate(-100%, 0px)',
    },
    
    megaMenuSubTitle: {
      display: 'none',
    },
    
    subLinksHeader: {
      display: 'none',
      minHeight: '60px',
      padding: '10px 26px',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#15113b',
      cursor: 'pointer',
      
      '&.login': {
        position: 'absolute',
        left: '0%',
        top: '0%',
        right: '0%',
        bottom: 'auto',
        display: 'block',
        width: '100%',
        webkitBoxPack: 'end',
        webkitJustifyContent: 'flex-end',
        msFlexPack: 'end',
        justifyContent: 'flex-end',
        backgroundColor: '#15113b',
      },
    },
    
    navbar2: {
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
    
    megaNavLink: {
      width: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    navContainer: {
      width: '100%',
      maxHeight: '65px',
      maxWidth: '100%',
      minHeight: '65px',
      paddingRight: '0%',
      paddingLeft: '0%',
      
      '&.megaNavLinks': {
        display: 'block',
        webkitBoxOrient: 'vertical',
        webkitBoxDirection: 'normal',
        webkitFlexDirection: 'column',
        msFlexDirection: 'column',
        flexDirection: 'column',
        webkitFlexWrap: 'wrap',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
      },
      
      '&.withSidePadding': {
        paddingRight: '0px',
        paddingLeft: '0px',
      },
      
      '&.contactV2': {
        marginBottom: '24px',
      },
    },
    
    mobileMenuContent: {
      display: 'block',
      opacity: 1,
    },
    
    mobileNavLinkContain: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '100%',
      marginBottom: '14px',
      paddingBottom: '10px',
      webkitBoxPack: 'justify',
      webkitJustifyContent: 'space-between',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      borderBottom: '1px solid #15113b',
      color: '#15113b',
      textDecoration: 'none',
      
      '&:Hover': {
        opacity: '0.6',
        textDecoration: 'none',
      },
      
      '&.expand': {
        webkitBoxOrient: 'vertical',
        webkitBoxDirection: 'normal',
        webkitFlexDirection: 'column',
        msFlexDirection: 'column',
        flexDirection: 'column',
        cursor: 'pointer',
        
        '&:Hover': {
          opacity: 1,
        },
      },
      
      '&.bottomLink': {
        borderBottomStyle: 'none',
      },
    },
    
    brand2: {
      webkitBoxPack: 'start',
      webkitJustifyContent: 'flex-start',
      msFlexPack: 'start',
      justifyContent: 'flex-start',
    },
    
    megaMenuTitleBox: {
      display: 'none',
    },
    
    dropdown: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '100%',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      textAlign: 'left',
    },
    
    writtenContent: {
      webkitBoxFlex: 1,
      webkitFlex: 1,
      msFlex: 1,
      flex: 1,
    },
    
    navLink3: {
      width: '100%',
      height: 'auto',
      paddingTop: '22px',
      paddingBottom: '22px',
      webkitBoxPack: 'start',
      webkitJustifyContent: 'flex-start',
      msFlexPack: 'start',
      justifyContent: 'flex-start',
      fontSize: '20px',
      textAlign: 'left',
    },
    
    hamburgerWrap: {
      display: 'block',
      cursor: 'pointer',
    },
    
    arrowLine: {
      width: '20px',
      height: '1px',
      padding: '0px',
      backgroundColor: '#15113b',
      webkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)',
      
      '&.bottom': {
        webkitTransform: 'translate(0px, 13px) rotate(-45deg)',
        msTransform: 'translate(0px, 13px) rotate(-45deg)',
        transform: 'translate(0px, 13px) rotate(-45deg)',
      },
    },
    
    mobileLinksWrap: {
      overflow: 'auto',
      marginTop: '64px',
      padding: '26px 26px 100px',
    },
    
    dropdownToggle: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      width: '100%',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'start',
      webkitAlignItems: 'flex-start',
      msFlexAlign: 'start',
      alignItems: 'flex-start',
      
      '&:Open': {
        position: 'static',
      },
    },
    
    megaNavIconWrap: {
      display: 'none',
    },
    
    section11: {
      padding: '50px 5% 65px',
      
      '&.termsSection': {
        paddingTop: '70px',
      },
    },
    
    logoContain: {
      marginBottom: '20px',
      paddingRight: '24px',
      paddingLeft: '24px',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      
      '&.25PercentWrap': {
        width: '33.33%',
        marginBottom: '24px',
      },
    },
    
    popUpContain: {
      display: 'block',
      width: '60%',
      opacity: 1,
      webkitTransform: 'none',
      msTransform: 'none',
      transform: 'none',
    },
    
    popUp: {
      height: 'auto',
      minWidth: 'auto',
      padding: '20px 30px 20px 10px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    newsletterTitleContain: {
      webkitBoxAlign: 'start',
      webkitAlignItems: 'flex-start',
      msFlexAlign: 'start',
      alignItems: 'flex-start',
    },
    
    formCheckboxGrid: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitBoxOrient: 'horizontal',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'row',
      msFlexDirection: 'row',
      flexDirection: 'row',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },
    
    fieldCheckbox: {
      width: '45%',
      marginRight: '5%',
    },
    
    fieldCheckbox2: {
      width: '45%',
      marginRight: '5%',
    },
    
    introHeroImage2: {
      position: 'relative',
      left: 'auto',
      top: 'auto',
      right: '-16%',
      bottom: '0%',
      zIndex: 1,
      width: '80vw',
      marginTop: '-50px',
    },
    
    card2: {
      webkitBoxOrient: 'horizontal',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'row',
      msFlexDirection: 'row',
      flexDirection: 'row',
    },
    
    emailFormBlock: {
      width: '70%',
    },
    
    tick: {
      marginRight: '4px',
      marginLeft: '4px',
      fontSize: '14px',
    },
  },
  
  ['@media screen and (max-width: 767px)']: {
    navbar: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
    },
    
    divBlock2: {
      backgroundColor: 'hsla(0, 0%, 94%, 0)',
    },
    
    divBlock3: {
      webkitBoxFlex: 0,
      webkitFlex: '0 auto',
      msFlex: '0 auto',
      flex: '0 auto',
    },
    
    list: {
      display: 'block',
      marginLeft: '20px',
      textAlign: 'center',
    },
    
    image: {
      width: '22px',
    },
    
    listItem: {
      display: 'none',
      marginBottom: '7px',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
    },
    
    link2: {
      position: 'absolute',
      display: 'block',
      width: '28px',
      opacity: 0,
    },
    
    section: {
      minHeight: '0vh',
      paddingTop: '100px',
      paddingBottom: '100px',
    },
    
    columns: {
      display: 'block',
      webkitBoxFlex: 0,
      webkitFlex: '0 auto',
      msFlex: '0 auto',
      flex: '0 auto',
    },
    
    image2: {
      display: 'none',
    },
    
    column2: {
      display: 'block',
    },
    
    textBlock: {
      fontSize: '24px',
      textAlign: 'center',
    },
    
    textBlock2: {
      textAlign: 'center',
    },
    
    heading5: {
      fontSize: '35px',
    },
    
    textBlock3: {
      fontSize: '16px',
    },
    
    heading7: {
      fontSize: '35px',
    },
    
    columns3: {
      display: 'block',
    },
    
    column3: {
      webkitBoxFlex: 1,
      webkitFlex: 1,
      msFlex: 1,
      flex: 1,
    },
    
    textBlock4: {
      fontSize: '16px',
    },
    
    divBlock4: {
      marginBottom: '25px',
    },
    
    heading10: {
      fontSize: '35px',
    },
    
    textBlock5: {
      fontSize: '16px',
    },
    
    heading13: {
      fontSize: '35px',
    },
    
    textBlock7: {
      fontSize: '16px',
    },
    
    footer: {
      padding: '40px 20px',
    },
    
    footerImage: {
      oObjectFit: 'contain',
      objectFit: 'contain',
    },
    
    divBlock6: {
      width: '45%',
    },
    
    column8: {
      marginBottom: '30px',
    },
    
    column9: {
      marginBottom: '25px',
    },
    
    column10: {
      marginBottom: '25px',
    },
    
    column11: {
      marginBottom: '25px',
    },
    
    listItem5: {
      display: 'block',
    },
    
    listItem6: {
      height: '50px',
      paddingTop: '7px',
    },
    
    menuButton: {
      marginLeft: '40px',
    },
    
    heading22: {
      fontSize: '40px',
      lineHeight: '1.1em',
    },
    
    heading24: {
      fontSize: '40px',
      lineHeight: '1.1em',
    },
    
    heading25: {
      fontSize: '40px',
    },
    
    list7: {
      gridAutoFlow: 'row',
      
      '&.displayBlock': {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
      },
      
      '&.mobileLogin': {
        paddingTop: '10px',
      },
      
      '&.justifyStart': {
        marginTop: '9px',
      },
    },
    
    section10: {
      padding: '40px 4%',
      
      '&.introHero': {
        maxHeight: 'none',
        minHeight: 'auto',
      },
    },
    
    footerColumn: {
      width: '48%',
      marginBottom: '50px',
    },
    
    footerCtaWrap: {
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'start',
      webkitAlignItems: 'flex-start',
      msFlexAlign: 'start',
      alignItems: 'flex-start',
    },
    
    sideBySideButtonContain: {
      paddingTop: '10px',
    },
    
    _4ColGrid: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      paddingBottom: '0px',
      webkitBoxPack: 'justify',
      webkitJustifyContent: 'space-between',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },
    
    pagesGrid: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      paddingTop: '32px',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },
    
    introHeroImage: {
      position: 'relative',
      right: '0%',
      bottom: '0%',
      zIndex: 1,
      width: '90vw',
      marginTop: '0px',
    },
    
    button8: {
      '&:Current': {
        marginTop: '6px',
        paddingRight: '8px',
        paddingLeft: '8px',
      },
      
      '&.displayBlock': {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
      },
    },

    divider: {
      '&.150Px': {
        height: '100px',
      },
    },
    
    footerButtonsContain: {
      width: '360px',
      marginLeft: '0px',
      paddingTop: '24px',
    },
    
    landingPageWrapper: {
      width: '100%',
      marginBottom: '20px',
    },
    
    copyrights: {
      textAlign: 'left',
    },
    
    footerTitle: {
      '&.whiteText': {
        textAlign: 'left',
      },
    },
    
    whiteText: {
      textAlign: 'center',
    },
    
    subHeadingLarge: {
      '&.centeredAligned': {
        marginTop: '14px',
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
    
    introYellowElement: {
      position: 'absolute',
      paddingLeft: '20px',
    },
    
    landingPageContain: {
      marginTop: '16px',
    },
    
    contentContain: {
      width: '100%',
      marginTop: '18px',
      marginBottom: '0px',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      
      '&.alignCentered': {
        webkitBoxAlign: 'center',
        webkitAlignItems: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
      },
    },
    
    mobileSubLink: {
      textAlign: 'left',
    },
    
    hamburgerLine: {
      height: '1px',
    },
    
    mobileMenu: {
      marginTop: '65px',
    },
    
    navbar2: {
      minHeight: 'auto',
      padding: '2px 3%',
    },
    
    navContainer: {
      minHeight: 'auto',
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
      
      '&.withSidePadding': {
        paddingRight: '0px',
        paddingLeft: '0px',
      },
      
      '&.contactV2': {
        webkitBoxOrient: 'vertical',
        webkitBoxDirection: 'reverse',
        webkitFlexDirection: 'column-reverse',
        msFlexDirection: 'column-reverse',
        flexDirection: 'column-reverse',
        webkitFlexWrap: 'wrap',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
      },
    },
    
    brand2: {
      height: 'auto',
      
      '&:Current': {
        height: 'auto',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },

    writtenContent: {
      textAlign: 'center',
    },
    
    logo: {
      maxWidth: '80%',
      marginTop: '10px',
    },
    
    card: {
      width: '100%',
      marginBottom: '48px',
    },
    
    _3ColCardsContain: {
      paddingTop: '55px',
    },
    
    keepLeftMobileLandscape: {
      textAlign: 'left',
    },
    
    '_24px': {
      '&.alignLeftMobileLandscape': {
        textAlign: 'left',
      },
    },

    
    _3ColGrid: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },
    
    quoteAuthor: {
      textAlign: 'center',
    },
    
    section11: {
      padding: '40px 4%',
      
      '&.termsSection': {
        paddingTop: '50px',
      },
    },
    
    quote: {
      textAlign: 'center',
    },
    
    circleImageWrap: {
      width: '300px',
      height: '300px',
      marginTop: '20px',
    },
    
    max600Px: {
      width: 'auto',
      maxWidth: 'none',
    },
    
    logoContain: {
      marginBottom: '20px',
    },
    
    logoWrap: {
      '&.25PercentWrap': {
        paddingRight: '30px',
        paddingLeft: '30px',
      },
    },
    
    popUpContain: {
      display: 'block',
      width: '90%',
      opacity: 1,
      webkitTransform: 'none',
      msTransform: 'none',
      transform: 'none',
    },
    
    popUp: {
      minWidth: '100%',
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    
    popUpHeading: {
      textAlign: 'left',
    },
    
    keepLeftMobile: {
      textAlign: 'left',
    },
    
    h4: {
      textAlign: 'center',
    },
    
    contactLink: {
      textAlign: 'center',
    },
    
    contactForm2: {
      paddingTop: '60px',
    },
    
    contactsWrap: {
      width: '100%',
    },
    
    h42: {
      textAlign: 'center',
    },
    
    contactLink2: {
      textAlign: 'center',
    },
    
    introHeroImage2: {
      position: 'relative',
      right: '0%',
      bottom: '0%',
      zIndex: 1,
      width: '90vw',
      marginTop: '0px',
    },
    
    card2: {
      width: '100%',
      marginBottom: '10px',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    
    _5CardContainer: {
      paddingTop: '25px',
    },
    
    keepLeftMobileLandscape2: {
      textAlign: 'left',
    },
    
    emailFormBlock: {
      width: '100%',
      minWidth: 'auto',
      paddingTop: '10px',
    },
  },
  
  ['@media screen and (max-width: 479px)']: {
    container2: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    
    form: {
      display: 'block',
      textAlign: 'center',
    },
    
    submitButton: {
      minHeight: '45px',
      marginLeft: '0px',
    },
    
    textField: {
      marginBottom: '15px',
    },
    
    textBlock3: {
      marginBottom: '0px',
    },
    
    button3: {
      minWidth: '175px',
      marginBottom: '15px',
      textAlign: 'center',
    },
    
    button4: {
      minWidth: '175px',
      textAlign: 'center',
    },
    
    section3: {
      paddingBottom: '50px',
    },
    
    section4: {
      paddingTop: '50px',
    },
    
    list2: {
      msGridColumns: '1fr',
      gridTemplateColumns: '1fr',
    },
    
    heading13: {
      lineHeight: '1.1em',
      textAlign: 'center',
    },
    
    heading14: {
      textAlign: 'center',
    },
    
    button5: {
      minWidth: '175px',
      marginBottom: '15px',
      textAlign: 'center',
    },
    
    button6: {
      minWidth: '175px',
      paddingRight: '25px',
      paddingLeft: '25px',
      textAlign: 'center',
    },
    
    footer: {
      paddingRight: '20px',
      paddingLeft: '20px',
      textAlign: 'left',
    },
    
    footerFlexContainer: {
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
    },
    
    footerLogoLink: {
      height: '60px',
    },
    
    footerHeading: {
      marginTop: '20px',
    },
    
    container9: {
      textAlign: 'center',
    },
    
    list4: {
      display: 'block',
    },
    
    link2: {
      borderLeftStyle: 'none',
    },
    
    listItem3: {
      marginBottom: '10px',
    },
    
    listItem4: {
      display: 'block',
    },
    
    listItem6: {
      width: '28px',
    },
    
    image5: {
      display: 'block',
      height: 'auto',
    },
    
    brand: {
      width: 'auto',
      height: 'auto',
    },
    
    heading21: {
      marginBottom: '0px',
      fontSize: '18px',
    },
    
    heading22: {
      fontSize: '30px',
    },
    
    paragraph2: {
      fontSize: '16px',
    },
    
    paragraph3: {
      fontSize: '18px',
    },
    
    heading23: {
      fontSize: '20px',
      textAlign: 'left',
    },
    
    heading24: {
      fontSize: '30px',
      textAlign: 'left',
    },
    
    paragraph4: {
      fontSize: '16px',
    },
    
    listItem18: {
      fontSize: '16px',
    },
    
    paragraph5: {
      fontSize: '16px',
      textAlign: 'left',
    },
    
    heading25: {
      marginBottom: '10px',
      fontSize: '30px',
      textAlign: 'left',
    },
    
    list7: {
      display: 'block',
    },
    
    listItem19: {
      marginBottom: '20px',
    },
    
    paragraph6: {
      fontSize: '16px',
      lineHeight: '1.5em',
    },
    
    paragraph7: {
      fontSize: '16px',
      lineHeight: '1.5em',
    },
    
    outlinedButton: {
      '&.introButton': {
        marginLeft: '0px',
        textAlign: 'center',
      },
      
      '&.mobileLogin': {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
      
      '&.darkOutline': {
        display: 'none',
      },
    },
    
    introHeroP: {
      textAlign: 'center',
    },
    
    socialLinksWrapper: {
      marginTop: '10px',
      
      '&.justifyStart': {
        marginTop: '6px',
      },
    },
    
    section10: {
      padding: '30px 5%',
      
      '&.footerSection': {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      
      '&.introHero': {
        paddingTop: '62px',
      },
    },
    
    footerCtaWrap: {
      webkitBoxAlign: 'start',
      webkitAlignItems: 'flex-start',
      msFlexAlign: 'start',
      alignItems: 'flex-start',
    },
    
    introHeading: {
      fontSize: '42px',
      lineHeight: '48px',
      textAlign: 'center',
    },
    
    sideBySideButtonContain: {
      paddingTop: '0px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
    },
    
    introHeroImage: {
      width: '100vw',
      marginTop: '-14px',
      paddingBottom: '25px',
      paddingLeft: '100px',
      textAlign: 'left',
    },
    
    button8: {
      '&.wCurrent': {
        marginTop: '0px',
      },
      
      '&.submitBtnContact2': {
        marginTop: '0px',
      },
    },
    
    divider: {
      '&.150Px': {
        height: '40px',
      },
    },
    
    footerButtonsContain: {
      width: '100%',
    },
    
    landingPageWrapper: {
      marginBottom: '30px',
    },
    
    copyrights: {
      fontSize: '14px',
      textAlign: 'left',
    },
    
    subHeadingLarge: {
      fontSize: '20px',
      lineHeight: '28px',
      textAlign: 'center',
      
      '&.intro': {
        marginTop: '10px',
        fontSize: '18px',
      },
      
      '&.centeredAligned': {
        fontSize: '18px',
      },
    },
    
    introYellowElement: {
      bottom: '3%',
    },
    
    landingPageContain: {
      marginTop: '6px',
      
      '&.shortPage': {
        height: '200px',
      },
    },
    
    contentContain: {
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    hamburgerLine: {
      height: '1px',
    },
    
    mobileMenu: {
      marginTop: '49px',
      webkitTransform: 'translate(-100%, 0px)',
      msTransform: 'translate(-100%, 0px)',
      transform: 'translate(-100%, 0px)',
    },
    
    navbar2: {
      padding: '0px 20px',
    },
    
    _2ColGrid: {
      marginBottom: '0px',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    brand2: {
      marginTop: '10px',
      
      '&:Current': {
        paddingLeft: '0px',
      },
    },
    
    writtenContent: {
      paddingTop: '20px',
      textAlign: 'center',
    },
    
    logo: {
      maxWidth: '80%',
    },
    
    card: {
      textAlign: 'center',
    },
    
    cardIcon: {
      left: '41%',
      top: '-11%',
      right: '0%',
      bottom: 'auto',
      
      '&.tallerIcon': {
        top: '-14%',
      },
    },
    
    keepLeftMobileLandscape: {
      textAlign: 'center',
    },
    
    '_24px': {
      '&.alignLeftMobileLandscape': {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        webkitBoxOrient: 'vertical',
        webkitBoxDirection: 'normal',
        webkitFlexDirection: 'column',
        msFlexDirection: 'column',
        flexDirection: 'column',
        webkitBoxPack: 'center',
        webkitJustifyContent: 'center',
        msFlexPack: 'center',
        justifyContent: 'center',
        webkitBoxAlign: 'center',
        webkitAlignItems: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
        fontSize: '15px',
        textAlign: 'center',
      },
    },
    
    quoteAuthor: {
      textAlign: 'center',
    },
    
    section11: {
      padding: '30px 5%',
      
      '&.termsSection': {
        paddingTop: '50px',
      },
    },
    
    quote: {
      textAlign: 'center',
      
      '&.largeQuote': {
        fontSize: '30px',
        lineHeight: '36px',
      },
    },
    
    circleImageWrap: {
      width: '250px',
      height: '250px',
    },
    
    quoteLogo: {
      maxWidth: 'none',
      paddingTop: '15px',
    },
    
    logoContain: {
      marginBottom: '0px',
    },
    
    logoWrap: {
      '&.25PercentWrap': {
        width: '50%',
        marginBottom: '34px',
        paddingRight: '18px',
        paddingLeft: '18px',
      },
    },
    
    popUpContain: {
      display: 'block',
      width: '100%',
      opacity: 1,
      webkitTransform: 'none',
      msTransform: 'none',
      transform: 'none',
    },
    
    popUp: {
      height: 'auto',
      padding: '50px 12px 30px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
    },
    
    newsletterTitleContain: {
      width: '90%',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
    },
    
    popUpHeading: {
      maxWidth: '200px',
      textAlign: 'left',
    },
    
    keepLeftMobile: {
      textAlign: 'left',
    },
    
    closeWwrapper: {
      '&.newsletterClose': {
        paddingTop: '12px',
        paddingRight: '22px',
      },
    },
    
    h4: {
      textAlign: 'center',
    },
    
    fieldCheckbox: {
      width: '100%',
      marginTop: '6px',
      borderBottomColor: '#15113b',
      color: '#15113b',
    },
    
    formField: {
      '&.initialWhiteBg': {
        width: '100%',
      },
    },
    
    fieldLabel3: {
      paddingLeft: '0px',
    },
    
    messageWrap: {
      width: '100%',
    },
    
    formFieldsWrap: {
      width: '100%',
    },
    
    paragraph8: {
      textAlign: 'center',
    },
    
    richText: {
      textAlign: 'left',
    },
    
    h42: {
      textAlign: 'center',
    },
    
    fieldCheckbox2: {
      width: '100%',
      marginTop: '6px',
      borderBottomColor: '#15113b',
      color: '#15113b',
    },
    
    fieldLabel4: {
      paddingLeft: '0px',
    },
    
    introHeroImage2: {
      width: '100vw',
      marginTop: '-14px',
    },
    
    alignCenter2Max800Px: {
        textAlign: 'center',
        fontSize: '40px',
        lineHeight: '44px',
    },
    
    card2: {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      height: '80px',
      marginRight: 'auto',
      marginBottom: '10px',
      marginLeft: 'auto',
      paddingTop: '10px',
      paddingBottom: '10px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      webkitJustifyContent: 'center',
      msFlexPack: 'center',
      justifyContent: 'center',
      webkitBoxAlign: 'center',
      webkitAlignItems: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      webkitAlignSelf: 'center',
      msFlexItemAlign: 'center',
      alignSelf: 'center',
      textAlign: 'center',
    },
    
    _5CardContainer: {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    
    submitButton5: {
      width: '100%',
      marginTop: '16px',
      marginLeft: '0px',
    },
    
    keepLeftMobileLandscape2: {
      textAlign: 'center',
    },
    
    emailFormBlock: {
      minWidth: '280px',
    },
    
    tick: {
      marginRight: '5px',
      marginLeft: '5px',
      fontSize: '14px',
    },
    
    textField9: {
      borderRightColor: '#15113b',
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
      textAlign: 'center',
    },
    
    emailForm: {
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
    },
    
    ticksContain: {
      paddingTop: '2px',
    },
    
    ticksContain2: {
      paddingTop: '2px',
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      webkitFlexDirection: 'column',
      msFlexDirection: 'column',
      flexDirection: 'column',
    },
  },
  
  wNode725Da83E0B2F625DB4644A6D6A9Fed31E6Da450E: {
    msGridColumn: 1,
    gridColumnStart: 1,
    msGridColumnSpan: 1,
    gridColumnEnd: 2,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
  },
  
  wNode725Da83E0B2F625DB4644A6D6A9Fed35E6Da450E: {
    msGridColumn: 2,
    gridColumnStart: 2,
    msGridColumnSpan: 1,
    gridColumnEnd: 3,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
  },
  
  wNode725Da83E0B2F625DB4644A6D6A9Fed3CE6Da450E: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
  },
  
  wNode14681E3B09148F4ED2539De19E67Bc9EEafcd219: {
    msGridColumn: 1,
    gridColumnStart: 1,
    msGridColumnSpan: 1,
    gridColumnEnd: 2,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
  },
  
  wNode14681E3B09148F4ED2539De19E67Bca2Eafcd219: {
    msGridColumn: 2,
    gridColumnStart: 2,
    msGridColumnSpan: 1,
    gridColumnEnd: 3,
    msGridRow: 2,
    gridRowStart: 2,
    msGridRowSpan: 1,
    gridRowEnd: 3,
  },
  
  wNode14681E3B09148F4ED2539De19E67Bca9Eafcd219: {
    webkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    msGridRowAlign: 'center',
    alignSelf: 'center',
  },
  
  wNode0E18F0D0D9464F816D40821Cb4698A54Ef687F34: {
    msGridColumnAlign: 'center',
    justifySelf: 'center',
  },
  
    
}));

export default useStyles;