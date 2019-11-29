import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CurrencyInfo from './CurrencyInfo'
import IndexWorld from './IndexWorld'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Finance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <IndexWorld />
        </Grid>
        <Grid item xs={4}>
          <CurrencyInfo />
        </Grid>
      </Grid>
    </div>
  );
}
