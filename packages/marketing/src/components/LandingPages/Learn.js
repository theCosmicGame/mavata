import React from 'react';

import ContentSection from './ContentSection';
import ContactForm from './ContactForm'
import LearnMoreSection from './LearnMoreSection';
import Footer from '../footer/Footer';
import SubmitButton from './SubmitButton';


export default function Learn() {  
  return (
    <React.Fragment>
      <ContentSection>
        <ContactForm />
        <LearnMoreSection />
        <SubmitButton />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};