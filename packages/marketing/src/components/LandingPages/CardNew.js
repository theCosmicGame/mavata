import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  '@global': {
    h4: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '15px',
      lineHeight: '20px',
      marginTop: '10px',
    },
  },

  card2: {
    backgroundColor: '#8ef0de',
    position: 'relative',
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100%',
    height: 'auto',
    padding: '33px 20px 33px',
    marginRight: 0,
    webkitBoxOrient: 'vertical',
    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '1px 1px 13px 0 rgba(0, 0, 0, 0.07)',
  },

  cardContent: {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    lineClamp: 2,
    WebkitLineClamp: 2,
    webkitBoxOrient: 'vertical',

    webkitBoxDirection: 'normal',
    webkitFlexDirection: 'column',
    msFlexDirection: 'column',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',

    flexGrow: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10px',

    fontSize: '24px',
    fontFamily: ['Playfair Display', 'sans-serif'],
    color: '#0c0a89',

    textAlign: 'center',
  },

}));

export default function CardNew(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card2}>
      <CardContent className={classes.cardContent}>
          <h4>{props.children}</h4>
      </CardContent>
  </Card>
  )
};
