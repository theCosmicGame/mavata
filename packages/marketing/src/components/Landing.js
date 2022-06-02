import React from 'react';
import Footer from './footer/Footer'
import ContentSection from './LandingPages/ContentSection'
import Cards from './LandingPages/Cards'
import Buttons from './LandingPages/SideBySideButtons';
import HeroContent from './LandingPages/HeroContent';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      minHeight: '100%',
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
  },
}));
  
export default function Landing() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <ContentSection>
        <HeroContent />
        <Cards />
        <Buttons />
      </ContentSection>
      <Footer />
    </React.Fragment>
  );
}
