import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import CompaniesHeading from './companies/CompaniesHeading';


const useStyles = makeStyles((theme) => ({
  bodyMain: {
    margin: 0,
    padding: 0,
    position: 'relative',

    maxHeight: '100%',
    height: '100%',
    width: 'auto',

    display: 'flex',
    flexDirection: 'column',
  },

  heroContent: {
    flexGrow: 1,
    display: 'block',
    width: 'auto',
    align: 'center',
  },

  sectionContent: {
    display: 'block',
    top: 0,
    left: 0,
    color: '#000',
    fontFamily: 'Barlow',
  },

  padBot: {
    paddingBottom: '10px',
    lineHeight: '70px',
  },

  wrapper: {
    left: 0,
    backgroundColor: '#fff',
},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <Sidebar />
        <main className={classes.bodyMain}>
          {/* Hero unit --> on javascript side of things, className="makeStyles-heroContent-2" (in development) but in production className="jss1" or "jss2" and so on (randomly generated class names)*/}
          {/* container has a .jss1 class that is DIFFERENT from the .jss1 of Landing Page */}
          <div className={classes.sectionContent}>
            <CompaniesHeading />
          </div>
        </main>
      </div>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}
