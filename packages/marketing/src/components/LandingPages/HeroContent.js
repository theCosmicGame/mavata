import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    h1: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '90px',
      marginTop: '20px',
    },
  },

  subHeadingLarge: {
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 300,

    '@media screen and (max-width: 767px)': {
      marginTop: '14px',
      fontSize: '20px',
      lineHeight: '30px',
    },
  },

  intro: {
    textAlign: 'center',
    marginRight: 'auto',
    marginBottom: '0px',
    marginLeft: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
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
    
  centerAligned: {
    maxWidth: '750px',
    marginTop: '40px',
    fontFamily: ['Barlow', 'sans-serif'],
    color: '#0c0a89',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',

    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '0px',
  },
}));

export default function HeroContent() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <p className={`${classes.subHeadingLarge} ${classes.intro}`}>Aggregate & Collaborate</p>
      <h1 className={`${classes.alignCenter} ${classes.max800Px}`}>Modern Data Collection for PE/IB</h1>
      <p className={`${classes.subHeadingLarge} ${classes.centerAligned}`}>Collect operating data without burdening management and simplify data collaboration.</p>
    </React.Fragment>
  );
};