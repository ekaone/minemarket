import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

//@material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
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
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import InfoIcon from '@material-ui/icons/Info';
import ExploreIcon from '@material-ui/icons/Explore';
import RoomIcon from '@material-ui/icons/Room';

// @modules
import FormBarge from './FormBarge'
import Home from './Home'
import { BargeComponents } from './Data'
import BargeMap from './BargeMap'

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

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    // border: `2px solid ${theme.palette.background.paper}`,
    border: `2px solid rgb(169,169,169)`,
    padding: '0 4px',
  },
}))(Badge);

const information = (
  <Typography paragraph>
    Information
  </Typography>
)

export default function View() {
  const classes = useStyles();

  const [menu, setMenu] = useState(Home)
  const switchMenu = (co) => {
    switch (co) {
      case 'Home':
        return setMenu(<Home />)
      case 'Barge':
        return setMenu('Barge component')
      case 'Create':
        return setMenu(<FormBarge />)
      case 'Information':
        return setMenu(information)
      case 'Search':
          return setMenu('Search component')
      case 'Map':
        return setMenu(<BargeMap />)
      default:
        return 'Default'
    }
  }

  const setIcon = (icon) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color='primary' />
      case 'barge':
        return (
          <StyledBadge1 badgeContent={7} color="secondary">
            <DirectionsBoatIcon color='primary' />
          </StyledBadge1>
        )
      case 'search':
        return <SearchIcon color='primary' />
      case 'create':
        return <CreateIcon color='primary' />
      case 'information':
        return (
          <Badge variant='dot' color="secondary">
            <InfoIcon color='primary' /> 
          </Badge>   
        )
      case 'map':
        return <RoomIcon color='primary' />
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
            <ExploreIcon />
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
