import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function ServiceTrip() {
  const classes = useStyles();
  const [values, setValues] = useState({
    serviceTrip: '',
    loadingShipment: '',
    startDate: '',
    bargeName: '',
    plannedProduct: '',
    endDate: '',
    tug: '',
    despatchOrder: '',
    shipment: '',
    despatchNumber: '',
    product: '',
    bulkVessel: '',
    captain: '',
    status: '',
    despatchOrder2: '',
    chiefEngineer: '',
    serviceTrip: '',
    nominatedProduct: ''
  })

  const handlerChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleServiceTrip = () => {
    console.log(values)
  }

  return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Service Trip"
            id="mui-theme-provider-standard-input"
            value={values.serviceTrip}
            onChange={handlerChange('serviceTrip')}
          />
          <TextField
            className={classes.margin}
            label="Loading Shipment"
            id="mui-theme-provider-standard-input"
            value={values.loadingShipment}
            onChange={handlerChange('loadingShipment')}
          />
          <TextField
            className={classes.margin}
            label="Start Date"
            id="mui-theme-provider-standard-input"
            value={values.startDate}
            onChange={handlerChange('startDate')}
          />
          <div>
            <TextField
              className={classes.margin}
              label="Barge Name"
              id="mui-theme-provider-standard-input"
              value={values.bargeName}
              onChange={handlerChange('bargeName')}
            />
            <TextField
              className={classes.margin}
              label="Planned Product"
              id="mui-theme-provider-standard-input"
              value={values.plannedProduct}
              onChange={handlerChange('plannedProduct')}
            />
            <TextField
              className={classes.margin}
              label="End Date"
              id="mui-theme-provider-standard-input"
              value={values.endDate}
              onChange={handlerChange('endDate')}
            />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleServiceTrip}
        >
          Save
        </Button>
      </div>
      <hr />
      <pre>
        {JSON.stringify(values, 2, null)}
      </pre>
    </>
  );
}
