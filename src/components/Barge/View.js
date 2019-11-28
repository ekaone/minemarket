import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import InfoIcon from '@material-ui/icons/Info';

import FormBarge from './FormBarge'
import { BargeComponents } from './Data'

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  menuHome: {
    marginRight: theme.spacing(2),
  },
}));

const dashboard = (
  <Typography paragraph>
    Dashboard - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
    donec massa sapien faucibus et molestie ac.
  </Typography>
)

const information = (
  <Typography paragraph>
    Information
  </Typography>
)

export default function View() {
  const classes = useStyles();

  const [menu, setMenu] = useState(dashboard)
  const switchMenu = (co) => {
    switch (co) {
      case 'Barge':
        return setMenu('Barge component')
      case 'Create':
        return setMenu(<FormBarge />)
      case 'Information':
        return setMenu(information)
      case 'Search':
          return setMenu('Search component')
      default:
        return 'Default'
    }
  }

  const setIcon = (icon) => {
    switch (icon) {
      case 'barge':
        return <DirectionsBoatIcon color='primary' />
      case 'search':
        return <SearchIcon color='primary' />
      case 'create':
        return <CreateIcon color='primary' />
      case 'information':
        return <InfoIcon color='primary' />    
      default:
        return        
    }
  }

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuHome}
            color="inherit"
            aria-label="back home"
            href="/explorer"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Barge
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <List>
          {BargeComponents.map((text, index) => (
            <ListItem button key={text.id} onClick={() => switchMenu(text.name)}>
              <ListItemIcon>
                {setIcon(text.icon)}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Graph', 'Report', 'Summary'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {menu}
      </main>
    </div>
    </>
  );
}
