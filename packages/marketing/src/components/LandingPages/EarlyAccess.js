import React from 'react';
import ContentSection from './ContentSection';
import Footer from '../footer/Footer';

import AccessForm from '../form/AccessForm';

export default function EarlyAccess() {  
  console.log(window.location.pathname)
  return (
    <React.Fragment>
      <ContentSection>
        <AccessForm />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};