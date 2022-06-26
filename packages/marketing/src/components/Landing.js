import React from 'react';
import Footer from './footer/Footer';
import ContentSection from './LandingPages/ContentSection';
import Cards from './LandingPages/Cards';
import CardsStyled from './LandingPages/CardsStyled';
import Buttons from './LandingPages/SideBySideButtons';
import HeroContent from './LandingPages/HeroContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    // MUST KEEP
    html: {
      height: '100%',
      webkitTextSizeAdjust: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
    },

    a: {
      fontFamily: '"Playfair Display"',
      textDecoration: 'none',
    },

    p: {
      marginTop: 0,
      marginBottom: '20px',
    },

    '*': {
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      fontSmoothing: 'always',
    },
  },
}));

export default function Landing() {

  return (
    <React.Fragment>
      <ContentSection>
        <HeroContent />
        <CardsStyled />
        <Buttons />
      </ContentSection>
      <Footer />
    </React.Fragment>
  );
}
