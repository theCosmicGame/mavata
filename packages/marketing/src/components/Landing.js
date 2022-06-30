import React from 'react';
import Footer from './footer/Footer';
import ContentSection from './LandingPages/ContentSection';
import Cards from './card/Cards';
import CardsStyled from './card/CardsStyled';
import Buttons from './buttons/SideBySideButtons';
import HeroContent from './LandingPages/HeroContent';
import { makeStyles } from '@material-ui/core/styles';

// deploy bump

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
