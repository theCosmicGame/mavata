import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  bodyMain: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  sectionContent: {
    backgroundColor: 'rgba(255, 211, 67, 1)',   // company yellow
  },
  textWhite: {
    color: '#fff',
    fontFamily: '"Playfair Display"',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  console.log(classes);
  return (
    <React.Fragment>
      <main className={classes.bodyMain}>
        {/* Hero unit --> on javascript side of things, className="makeStyles-heroContent-2" (in development) but in production className="jss1" or "jss2" and so on (randomly generated class names)*/}
        {/* container has a .jss1 class that is DIFFERENT from the .jss1 of Landing Page */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <h1>Hello World</h1>
        </Container>
        </div>
      </main>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}
