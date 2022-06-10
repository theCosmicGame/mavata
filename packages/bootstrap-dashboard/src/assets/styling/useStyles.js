import { makeStyles } from '@material-ui/core/styles',

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '260px',
    display: 'block',
    zIndex: 1,
    color: '#fff',
    fontWeight: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
        
    '&, &:before, &:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 2,
    },
      
    '&:before': {
      opacity: '.33',
      background: '#000000',
    },

    '&.sidebarWrapper': {
      position: 'relative',
      maxHeight: 'calc(100vh - 75px)',
      minHeight: '100%',
      overflow: 'auto',
      width: '260px',
      zIndex: 4,
      paddingBottom: '100px',
    },
    
    '&.sidebarBackground': {
      position: 'absolute',
      zIndex: 1,
      height: '100%',
      width: '100%',
      display: 'block',
      top: 0,
      left: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    
    '&.logo': {
      padding: '10px 15px 9px 15px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative',
      zIndex: 4,
      
      '&.simpleText': {
        textTransform: 'uppercase',
        padding: '5px 0px',
        display: 'block',
        fontSize: '18px',
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 400,
        lineHeight: '30px',
      },
    },
    
    '&$logoTim': {
      borderRadius: '50%',
      border: '1px solid #333',
      display: 'block',
      height: '61px',
      width: '61px',
      float: 'left',
      overflow: 'hidden',
      
      '&.img': {
        width: '60px',
        height: '60px',
      },
    },
    
    '&.nav': {
      marginTop: '20px',
      float: 'none',
      display: 'block',
      
      // .sidebar .nav li .nav-link
      // navLinkLi
      '&li': {
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.13)',
          opacity: 1,
        },
        '&:active': {
          color: '#FFFFFF',
          opacity: 1,
          background: 'rgba(255, 255, 255, 0.23)',
        },
        
        '&$navLink': {
          color: '#FFFFFF',
          margin: '5px 15px',
          opacity: '.86',
          borderRadius: '4px',
          display: 'block',
          padding: '10px 15px',
            
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.13)',
            opacity: 1,
          },
        },
        
        '&.separator': {
          margin: '15px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          
          '& + &.NavItem': {
            marginTop: '31px',
          },
        },
      },
      
      '&.caret': {
        marginTop: '13px',
        position: 'absolute',
        right: '30px',
      },
      
      '&.activePro': {
        position: 'absolute',
        width: '100%',
        bottom: '10px',
      },
    },
  
    '[data-image]': {
      '&:after': {
        opacity: '.77',
      },
    },
    
    '&.hasImage': {
      '&:after': {
        opacity: '.77',
      },
    },
      

    '[data-color="black"]': {
      '&:after': {
        background: '#777777',
        background: '-moz-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #777777), color-stop(100%, #777777))',
        background: '-webkit-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-o-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-ms-linear-gradient(top, #777777 0%, #777777 100%)',
        background: 'linear-gradient(to bottom, #777777 0%, #777777 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="blue"]': {
      '&:after': {
        background: '#1F77D0',
        background: '-moz-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #1F77D0), color-stop(100%, #533ce1))',
        background: '-webkit-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-o-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-ms-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: 'linear-gradient(to bottom, #1F77D0 0%, #533ce1 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="azure"]': {
      '&:after': {
        background: '#1DC7EA',
        background: '-moz-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #1DC7EA), color-stop(100%, #4091ff))',
        background: '-webkit-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-o-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-ms-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: 'linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="green"]': {
      '&:after': {
        background: #87CB16,
        background: '-moz-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #87CB16), color-stop(100%, #6dc030))',
        background: '-webkit-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-o-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-ms-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: 'linear-gradient(to bottom, #87CB16 0%, #6dc030 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="orange"]': {
      '&:after': {
        background: '#FFA534',
        background: '-moz-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #FFA534), color-stop(100%, #ff5221))',
        background: '-webkit-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-o-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-ms-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: 'linear-gradient(to bottom, #FFA534 0%, #ff5221 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="red"]': {
      '&:after': {
        background: '#FB404B',
        background: '-moz-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #FB404B), color-stop(100%, #bb0502))',
        background: '-webkit-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-o-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-ms-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: 'linear-gradient(to bottom, #FB404B 0%, #bb0502 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="purple"]': {
      '&:after': {
        background: '#9368E9',
        background: '-moz-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #9368E9), color-stop(100%, #943bea))',
        background: '-webkit-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-o-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-ms-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: 'linear-gradient(to bottom, #9368E9 0%, #943bea 100%)',
        backgroundSize: '150% 150%',
      },
    },
  },
  
  navbarCollapse: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '260px',
    display: 'block',
    zIndex: 1,
    color: '#fff',
    fontWeight: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    '&, &:before, &:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 2,
    },
      
    '&:before': {
      opacity: '.33',
      background: '#000000',
    },

    '&:after': {
      background: '#9368E9',
      background: '-moz-linear-gradient(top, #9368E9 0%, #943bea 100%)',
      background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #9368E9), color-stop(100%, #943bea))',
      background: '-webkit-linear-gradient(top, #9368E9 0%, #943bea 100%)',
      background: '-o-linear-gradient(top, #9368E9 0%, #943bea 100%)',
      background: '-ms-linear-gradient(top, #9368E9 0%, #943bea 100%)',
      background: 'linear-gradient(to bottom, #9368E9 0%, #943bea 100%)',
      backgroundSize: '150% 150%',
      zIndex: 3,
      opacity: 1,
    },
    
    '&.sidebarWrapper': {
      position: 'relative',
      maxHeight: 'calc(100vh - 75px)',
      minHeight: '100%',
      overflow: 'auto',
      width: '260px',
      zIndex: 4,
      paddingBottom: '100px',
    },
    
    '&.sidebarBackground': {
      position: 'absolute',
      zIndex: 1,
      height: '100%',
      width: '100%',
      display: 'block',
      top: 0,
      left: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
        
    '&.logo': {
      padding: '10px 15px 9px 15px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative',
      zIndex: 4,
      
      '&.simpleText': {
        textTransform: 'uppercase',
        padding: '5px 0px',
        display: 'block',
        fontSize: '18px',
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 400,
        lineHeight: '30px',
      },
    },
    
    '&$logoTim': {
      borderRadius: '50%',
      border: '1px solid #333',
      display: 'block',
      height: '61px',
      width: '61px',
      float: 'left',
      overflow: 'hidden',
      
      '&.img': {
        width: '60px',
        height: '60px',
      },
    },
    
    '&.nav': {
      marginTop: '20px',
      float: 'none',
      display: 'block',
      
      // .sidebar .nav li .nav-link
      // navLinkLi
      '&li': {
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.13)',
          opacity: 1,
        },
        '&:active': {
          color: '#FFFFFF',
          opacity: 1,
          background: 'rgba(255, 255, 255, 0.23)',
        },

        '&$navLink': {
          color: '#FFFFFF',
          margin: '5px 15px',
          opacity: '.86',
          borderRadius: '4px',
          display: 'block',
          padding: '10px 15px',
  
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.13)',
            opacity: 1,
          },
        },

        '&.separator': {
          margin: '15px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        
          '& + &.NavItem': {
            marginTop: '31px',
          },
        },
      },
      
      '&.caret': {
        marginTop: '13px',
        position: 'absolute',
        right: '30px',
      },
      
      '&.activePro': {
        position: 'absolute',
        width: '100%',
        bottom: '10px',
      },
    },
      
    '[data-image]': {
      '&:after': {
        opacity: '.77',
      },
    },
    
    '&.hasImage': {
      '&:after': {
        opacity: '.77',
      },
    },


    '[data-color="black"]': {
      '&:after': {
        background: '#777777',
        background: '-moz-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #777777), color-stop(100%, #777777))',
        background: '-webkit-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-o-linear-gradient(top, #777777 0%, #777777 100%)',
        background: '-ms-linear-gradient(top, #777777 0%, #777777 100%)',
        background: 'linear-gradient(to bottom, #777777 0%, #777777 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="blue"]': {
      '&:after': {
        background: '#1F77D0',
        background: '-moz-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #1F77D0), color-stop(100%, #533ce1))',
        background: '-webkit-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-o-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: '-ms-linear-gradient(top, #1F77D0 0%, #533ce1 100%)',
        background: 'linear-gradient(to bottom, #1F77D0 0%, #533ce1 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="azure"]': {
      '&:after': {
        background: '#1DC7EA',
        background: '-moz-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #1DC7EA), color-stop(100%, #4091ff))',
        background: '-webkit-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-o-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: '-ms-linear-gradient(top, #1DC7EA 0%, #4091ff 100%)',
        background: 'linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="green"]': {
      '&:after': {
        background: #87CB16,
        background: '-moz-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #87CB16), color-stop(100%, #6dc030))',
        background: '-webkit-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-o-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: '-ms-linear-gradient(top, #87CB16 0%, #6dc030 100%)',
        background: 'linear-gradient(to bottom, #87CB16 0%, #6dc030 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="orange"]': {
      '&:after': {
        background: '#FFA534',
        background: '-moz-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #FFA534), color-stop(100%, #ff5221))',
        background: '-webkit-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-o-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: '-ms-linear-gradient(top, #FFA534 0%, #ff5221 100%)',
        background: 'linear-gradient(to bottom, #FFA534 0%, #ff5221 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="red"]': {
      '&:after': {
        background: '#FB404B',
        background: '-moz-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #FB404B), color-stop(100%, #bb0502))',
        background: '-webkit-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-o-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: '-ms-linear-gradient(top, #FB404B 0%, #bb0502 100%)',
        background: 'linear-gradient(to bottom, #FB404B 0%, #bb0502 100%)',
        backgroundSize: '150% 150%',
      },
    },
    '[data-color="purple"]': {
      '&:after': {
        background: '#9368E9',
        background: '-moz-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #9368E9), color-stop(100%, #943bea))',
        background: '-webkit-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-o-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: '-ms-linear-gradient(top, #9368E9 0%, #943bea 100%)',
        background: 'linear-gradient(to bottom, #9368E9 0%, #943bea 100%)',
        backgroundSize: '150% 150%',
      },
    },
  },
  
  navLink: {
    color: '#FFFFFF',
    margin: '5px 15px',
    opacity: .86,
    borderRadius: '4px',
    textTransform: 'uppercase',
    lineHeight: '30px',
    fontSize: '12px',
    fontWeight: 600,
  },

  separtor: {},
  caret: {},

  //.sidebar .logo p
  pLogo: {
    float: 'left',
    fontSize: '20px',
    margin: '10px 10px',
    color: '#FFFFFF',
    lineHeight: '20px',
    fontFamily: ['Helvetica Neue', Helvetica, Arial, sans-serif],
  },
  
  logo: {
    padding: '10px 15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',

    '&.simpleText': {
      textTransform: 'uppercase',
      padding: '5px 0px',
      display: 'block',
      fontSize: '18px',
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 400,
      lineHeight: '30px',
    },
  },

  logoTim: {
    borderRadius: '50%',
    border: '1px solid #333',
    display: 'block',
    height: '61px',
    width: '61px',
    float: 'left',
    overflow: 'hidden',
  },

  //.sidebar .nav li .nav-link p 
  pNavLinkLi: {
    margin: 0,
    lineHeight: '31px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    display: 'inline-flex',
    
    '&.img': {
      width: '60px',
      height: '60px',
    },
  },
  
  //.sidebar .nav li .nav-link i
  iNavLinkLi: {
    fontSize: '28px',
    marginRight: '15px',
    width: '30px',
    textAlign: 'center',
    verticalAlign: 'middle',
    float: 'left',
  },

  //.sidebar .nav .active-pro a
  aActivePro: {
    color: '#FFFFFF !important',
  },
  
  
}))',

export default useStyles,