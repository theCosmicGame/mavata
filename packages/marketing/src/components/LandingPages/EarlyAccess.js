import React from 'react';
import ContentSection from './ContentSection';
import ContactForm from './ContactForm';
import SubmitButton from './SubmitButton';
import Footer from '../footer/Footer';

export default function EarlyAccess() {  
  return (
    <React.Fragment>
      <ContentSection>
        <ContactForm />
        <SubmitButton />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};