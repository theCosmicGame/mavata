import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      background: 'linear-gradient(180deg, #ffd343 70%, #15113b 30%)',
    },
    footer: {
      backgroundColor: 'rgba(21, 17, 59, 1)', 
    },
    section: {
      width: '100%',
    },
    // MUST KEEP
    html: {
      height: '100%',
    },
  },

  alignCenter: {
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',
    textAlign: 'center',
  },
      
  max800Px: {
    color: '#0c0a89',
    fontSize: '48px',
    lineHeight: '60px',
    maxWidth: 'none',
    fontFamily: ['Playfair Display', 'sans-serif'],
    textAlign: 'center',
  },
  
  section11: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    maxWidth: 'none',
    padding: '35px 6%',
    paddingTop: '10px',
    paddingBottom: '40px',
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
  },
       
  yellowBg: {
    backgroundColor: '#ffd343',
  },

  container18: {
    width: 'auto',
    maxWidth: '1400px',
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '40px',
    position: 'relative',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
  },
}));

export default function ContentSection(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <section className={`${classes.section11} ${classes.yellowBg}`}>
        <div className={classes.container18}>{props.children}</div>
      </section>
    </React.Fragment>
  )
};
