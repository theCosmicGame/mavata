import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  footerLink: {
    display: 'block',
    color: '#fff',
    paddingTop: '8px',
    paddingBottom: '8px',
    fontFamily: 'Barlow',
    fontSize: '13px',
    fontWeight: '400',
  },
}));

export default function FooterLink(props) {
  const classes = useStyles();

  return (
    <MaterialLink component={RouterLink} to={props.to} color="inherit" className={classes.footerLink}>{props.children}</MaterialLink>
  )
}