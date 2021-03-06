import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  h2styled: {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '24px',
    lineHeight: '36px',
    marginTop: '20px',
  },

  h3styled: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    fontWeight: 'bold',
    marginBottom: '5px',
    fontSize: '16px',
    lineHeight: '25px',
    marginTop: '10px',
  },

  containerYellow: {
    backgroundColor: '#ffd343',
    width: '100%',
  },
  
  section2: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffd343',
    maxWidth: 'none',
    padding: '50px 50px 120px 50px',
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

    '@media screen and (max-width: 991px)': {
      padding: '50px 5% 65px',
    },

    '@media screen and (max-width: 767px)': {
      padding: '40px 4%',
    },

    '@media screen and (max-width: 479px)': {
      padding: '30px 5%',
    },
  },

  container1: {
    width: 'auto',
    maxWidth: '1400px',
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '30px',
    position: 'relative',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',

    '&.megaNavContainer': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',

      '@media screen and (max-width: 991px)': {
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
  },
}));

export default function ContentSection(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.containerYellow}>
      <section className={classes.section2}>
        <div className={classes.container1}>{props.children}</div>
      </section>
      </div>
    </React.Fragment>
  )
};
