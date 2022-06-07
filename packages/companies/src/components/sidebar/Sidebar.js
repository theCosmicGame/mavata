import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  withSidebar {
    display: 'flex',
    flexWrap: 'wrap',
  },

  sidebar: {
    flexBasis: '20rem',
    flexGrow: 1,
  },

  notSidebar: {
    flexBasis: 0,
    flexGrow: 999,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    
  );
}