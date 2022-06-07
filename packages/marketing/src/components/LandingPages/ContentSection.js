import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  '@global': {
    section: {
      width: '100%',
      backgroundColor: '#ffd343',
    },
    // MUST KEEP
    html: {
      height: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
    },
    h2: {
      fontWeight: 'bold',
      marginBottom: '10px',
        fontSize: '24px',
        lineHeight: '36px',
        marginTop: '20px',
    },
    h3: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '16px',
      lineHeight: '25px',
      marginTop: '10px',
    },

    a: {
      fontFamily: '"Playfair Display"',
      textDecoration: 'none',
    },

    p: {
      marginTop: 0,
      marginBottom: '20px',
    },
  },

  containerYellow: {
    backgroundColor: '#ffd343',
    width: '100%',
  },
  
  section1: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    maxWidth: 'none',
    paddingTop: '50px',
    paddingBottom: '120px',
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

  container1: {
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
      <div className={classes.containerYellow}>
      <section className={classes.section1}>
        <div className={classes.container1}>{props.children}</div>
      </section>
      </div>
    </React.Fragment>
  )
};
