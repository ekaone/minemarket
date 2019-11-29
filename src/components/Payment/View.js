import React, { useState } from 'react';

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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import ExploreIcon from '@material-ui/icons/Explore';
import Badge from '@material-ui/core/Badge';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { MenuItems } from './Data'
import Finance from './Finance'

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
    border: `2px solid rgb(169,169,169)`,
    padding: '0 4px',
  },
}))(Badge);


export default function View() {
  const classes = useStyles();

  const [menu, setMenu] = useState('Home')
  const switchMenu = (co) => {
    switch (co) {
      case 'Home':
        return setMenu('Home')
      case 'Barge':
        return setMenu('Barge component')
      case 'Create':
        return setMenu('Create payment')
      case 'Finance':
        return setMenu(<Finance />)
      case 'Search':
          return setMenu('Search component')
      default:
        return 'Default'
    }
  }

  const setIcon = (icon) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color='primary' />
      case 'finance':
        return (
          <StyledBadge1 badgeContent={7} color="secondary">
            <MonetizationOnIcon color='primary' />
          </StyledBadge1>
        )
      case 'create':
        return <CreateIcon color='primary' />
      case 'search':
        return (
          <Badge variant='dot' color="secondary">
            <SearchIcon color='primary' /> 
          </Badge>   
        )
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
            Payment
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
        <List>
          {MenuItems.map((text, index) => (
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
