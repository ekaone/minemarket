import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Configuration from './Configuration'
import Dashboard from './Dashboard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Router() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* <Configuration /> */}
        </Grid>
        <Grid item xs={3}>
          <Configuration />
        </Grid>
        <Grid item xs={3}>
          <Dashboard />
        </Grid>
        <Grid item xs={3}>
          {/* <Configuration /> */}
        </Grid>
      </Grid>
    </div>
  );
}