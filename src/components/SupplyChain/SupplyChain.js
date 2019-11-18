import React, { useState, Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components units
import ToolBar from './ToolBar'
import LocalShipping from './LocalShipping'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SupplyChain() {
  const classes = useStyles();
  
  
  const listComponents = [
    { type: 'Undefined', component: 'Undefined'},
    { type: 'Airport', component : 'eka' },
    { type: 'Local Shipping', component: 'Local Shipping..'}
  ]
  const [content, setContent] = useState({ component: 'Default component' })

  const getContent = (c) => {

    switch (c) {
      case 'Local Shipping':
        return setContent({ component: <LocalShipping /> })
      case 'Airport':
        return setContent({ component: 'Airport component' })  
      default:
        return content
    }
        
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ToolBar 
            handlerAirPort={() => getContent('Airport')}
            handlerLocalShipping={() => getContent('Local Shipping')}
          />
        </Grid>
        <Grid item xs={12}>
          {content.component}
        </Grid>
      </Grid>
    </div>
  );
}