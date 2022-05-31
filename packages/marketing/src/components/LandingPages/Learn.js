import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContentSection from './ContentSection';
import ContactForm from './ContactForm'
import LearnMoreSection from './LearnMoreSection';
import Footer from '../footer/Footer';

const useStyles = makeStyles((theme) => ({
  
}));


export default function Learn() {  
  return (
    <React.Fragment>
      <ContentSection>
        <ContactForm />
        <LearnMoreSection />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};