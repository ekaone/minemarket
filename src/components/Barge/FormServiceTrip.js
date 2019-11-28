import React, { useState } from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import BargeInfo from './BargeInfo'
import FormSearch from './FormSearch'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
    flexWrap: 'wrap',
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1, 2),
    width: 170
  },
  buttonSave: {
    margin: theme.spacing(1, 2),
  },
  menu: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];


export default function FormServiceTrip() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [values, setValues] = useState({
    serviceTrip: '', loadingShipment: '', startDate: '', bargeName: '', plannedProduct: '',
    endDate: '', tug: '', despatchOrder: '', shipment: '', despatchNumber: '',
    product: '', bulkVessel: '', captain: '', status: '', despatchOrder2: '',
    chiefEngineer: '', serviceTrip2: '', nominatedProduct: '', currency: ''
  })


  const handlerChange = (prop) => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleServiceTrip = () => {
    setValues({ ...values, startDate: selectedDate })
  }

  return (
    <>
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}> 
          <FormSearch />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <Paper>
            <TextField
              className={classes.margin}
              label="Service Trip"
              // id="mui-theme-provider-standard-input"
              value={values.serviceTrip}
              onChange={handlerChange('serviceTrip')}
              margin="dense"
              id="outlined-basic" 
              variant="outlined"
            />
            <TextField
              className={classes.margin}
              label="Loading Shipment"
              // id="mui-theme-provider-standard-input"
              value={values.loadingShipment}
              onChange={handlerChange('loadingShipment')}
              margin="dense"
              id="outlined-basic" 
              variant="outlined"

            />
            <div>
              <TextField
                className={classes.margin}
                label="Loading Shipment"
                // id="mui-theme-provider-standard-input"
                value={values.loadingShipment}
                onChange={handlerChange('loadingShipment')}
                margin="dense"
                id="outlined-basic" 
                variant="outlined"
              />
              <TextField
                className={classes.margin}
                label="Barge Name"
                // id="mui-theme-provider-standard-input"
                value={values.bargeName}
                onChange={handlerChange('bargeName')}
                margin="dense"
                id="outlined-basic" 
                variant="outlined"
              />
            </div>
            <div>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              className={classes.margin}
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="outlined"
            />
            </div>
            <div>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleServiceTrip}
                className={classes.buttonSave}
                size='small'
              >
                Save
              </Button>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BargeInfo />
          </Grid> 
        </Grid>
        </div>
      <pre>
        {/* {JSON.stringify(values, null, 2)} */}
      </pre>
    </>
  );
}
