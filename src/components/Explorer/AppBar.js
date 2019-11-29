import React from 'react';
import { useHistory } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'black'
  },
  menuHome: {
    marginRight: theme.spacing(2),
  },
}));

export default function ExplorerAppBar(props) {
  const classes = useStyles();

  let history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: 'white' }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuHome}
            color="secondary"
            aria-label="back home"
            onClick={routeChange}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Mine market Explorer
          </Typography>
            <TextField
              margin="dense" 
              id="outlined-basic" 
              label="Search Explorer" 
              variant="outlined" 
              onChange={props.handlerChange}
            />
          <SearchIcon 
            onClick={props.handlerSearch}
            style={{ color: 'black' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
