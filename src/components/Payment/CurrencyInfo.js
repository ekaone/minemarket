import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Paper from '@material-ui/core/Paper';

import { Currency } from './Data'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CurrencyInfo() {
  const classes = useStyles();

  return (
    <>
    <Paper className={classes.paper}>
      <List dense className={classes.root}>
        {Currency.map((value, index) => {
          return (
            <ListItem key={value.id} button onClick={() => console.log(value.name)} divider>
              <ListItemAvatar>
                <AttachMoneyIcon />
              </ListItemAvatar>
              <ListItemText id={index} primary={value.name} />
              <ListItemSecondaryAction>
                <ArrowDropUpIcon style={{ color: 'red' }}/>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
    </>
  );
}
