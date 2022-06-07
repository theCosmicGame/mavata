import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React from 'react';
import CardNew from './CardNew'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({     
  _5CardContainer: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
    alignItems: 'center',
  },
  
  _3ColGrid: {
    width: '100%',
    gridAutoFlow: 'row',
    gridColumnGap: '8px',
    gridRowGap: '0px',
    gridTemplateAreas: '"Area Area Area"',
    msGridColumns: '1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    justifyContent: 'space-between',
  },
}));

const cards = ['Integrate with Company Systems', 
                'Aggregate Current & Trend Data', 
                'Centralize Company Materials', 
                'End Export-Format-Email Cycles', 
                'Modernize Data Collaboration'];

export default function Cards() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes._5CardContainer}>
        <Grid container spacing={2} className={classes._3ColGrid}>
          {cards.map((card, index) => (
            <Grid item key={index} sm={6} md={2} lg={2}>
              <CardNew key={index}>
                  {card}
              </CardNew>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};