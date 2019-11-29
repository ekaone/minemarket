import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

import { Currency } from './Data'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CurrencyInfo() {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {Currency.map((value, index) => {
        return (
          <ListItem key={value.id} button onClick={() => console.log(value.name)}>
            <ListItemAvatar>
              <AttachMoneyIcon />
            </ListItemAvatar>
            <ListItemText id={index} primary={value.name } />
            <ListItemSecondaryAction>
              <ArrowDropUpIcon style={{ color: 'red' }}/>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
