import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import useStyles from '../styling/NavStyle'

export default function ButtonNew(props) {
  const classes = useStyles();

  return (
    <ul className={classes.buttonsUl}>
      <RouterLink to={props.to} className={`${classes.outlinedButton} ${classes.darkOutline} ${classes.wButton}`}>{props.children}</RouterLink>
    </ul>
  )
}