import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React from 'react';
import CardNew from './CardNew'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({     
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
    alignItems: 'center',
    
    '@media screen and (max-width: 767px)': {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-ms-flexbox',
      display: 'flex',
      webkitFlexWrap: 'wrap',
      msFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },
  },
    
  wLayoutGrid: {
    gridAutoColumns: '1fr',
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    msGridRows: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridRowGap: '16px',
    gridColumnGap: '16px',
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
        <Grid container spacing={2} className={`${classes._3ColGrid} ${classes.wLayoutGrid}`}>
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