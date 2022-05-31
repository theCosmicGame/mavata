import React from 'react';
import Footer from './footer/Footer'
import ContentSection from './LandingPages/ContentSection'
import Cards from './LandingPages/Cards'
import Buttons from './LandingPages/SideBySideButtons';
import HeroContent from './LandingPages/HeroContent';

export default function Landing() {
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
