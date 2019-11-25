import React from 'react'

import Grid from '@material-ui/core/Grid';

import Barge from './Barge'

function Explorer() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          Header
        </Grid>
        <Grid item xs={6} sm={3}>
          <Barge />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Barge />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Barge />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Barge />
        </Grid>
      </Grid>
    </>
  )
}

export default Explorer
