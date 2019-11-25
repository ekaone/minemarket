import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
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

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

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
    serviceTrip2: '',
    nominatedProduct: '',

    currency: ''
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
          <div>
            <TextField
                className={classes.margin}
                label="Tug"
                id="mui-theme-provider-standard-input"
                value={values.tug}
                onChange={handlerChange('tug')}
              />
              <TextField
                className={classes.margin}
                label="Despatch Order"
                id="mui-theme-provider-standard-input"
                value={values.despatchOrder}
                onChange={handlerChange('despatchOrder')}
              />
              <TextField
                className={classes.margin}
                label="Shipment"
                id="mui-theme-provider-standard-input"
                value={values.shipment}
                onChange={handlerChange('shipment')}
              />
          </div>
          <div>
            <TextField
                className={classes.margin}
                label="Despatch Number"
                id="mui-theme-provider-standard-input"
                value={values.despatchNumber}
                onChange={handlerChange('despatchNumber')}
              />
              <TextField
                className={classes.margin}
                label="Product"
                id="mui-theme-provider-standard-input"
                value={values.product}
                onChange={handlerChange('product')}
              />
              <TextField
                className={classes.margin}
                label="Bulk Vessel"
                id="mui-theme-provider-standard-input"
                value={values.bulkVessel}
                onChange={handlerChange('bulkVessel')}
              />
          </div>
          <div>
            <TextField
                className={classes.margin}
                label="Captain"
                id="mui-theme-provider-standard-input"
                value={values.captain}
                onChange={handlerChange('captain')}
              />
              <TextField
                className={classes.margin}
                label="Status"
                id="mui-theme-provider-standard-input"
                value={values.status}
                onChange={handlerChange('status')}
              />
              <TextField
                className={classes.margin}
                label="Despatch Order 2"
                id="mui-theme-provider-standard-input"
                value={values.despatchOrder2}
                onChange={handlerChange('despatchOrder2')}
              />
          </div>
          <div>
            <TextField
                className={classes.margin}
                label="Chief Engineer"
                id="mui-theme-provider-standard-input"
                value={values.chiefEngineer}
                onChange={handlerChange('chiefEngineer')}
              />
              <TextField
                className={classes.margin}
                label="Service Trip 2"
                id="mui-theme-provider-standard-input"
                value={values.serviceTrip2}
                onChange={handlerChange('serviceTrip2')}
              />
              <TextField
                className={classes.margin}
                label="Nominated Product"
                id="mui-theme-provider-standard-input"
                value={values.nominatedProduct}
                onChange={handlerChange('nominatedProduct')}
              />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              className={classes.textField}
              value={values.currency}
              onChange={handlerChange('currency')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your currency"
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
