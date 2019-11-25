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
    bargeName: '',
    captain: '',
    chiefEngineer: ''
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
            label="Barge Name"
            id="mui-theme-provider-standard-input"
            value={values.bargeName}
            onChange={handlerChange('bargeName')}
          />
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
              label="Chief Engineer"
              id="mui-theme-provider-standard-input"
              value={values.chiefEngineer}
              onChange={handlerChange('chiefEngineer')}
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
      <div>
        <pre>
          {JSON.stringify(values, 2, null)}
        </pre>
      </div>
    </>
  );
}
