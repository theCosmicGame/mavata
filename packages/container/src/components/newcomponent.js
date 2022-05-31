import React from 'react';
import useStyles from './styling/useStyles';

function Component(props) {
  const classes = useStyles();

  return (
    <div>{props.children}</div>
  )
};

export default Component;