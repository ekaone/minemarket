import React, { useState } from 'react';

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
import Badge from '@material-ui/core/Badge';

//@material-ui/icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyIcon from '@material-ui/icons/Money';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RowingIcon from '@material-ui/icons/Rowing';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import CreditCardIcon from '@material-ui/icons/CreditCard';

// components units
import { MenuItems } from './Data'
import Demurrage from './Demurrage'
import Freight from './Freight'
import FreightDemurrage from './FreightDemurrage'
import Purchase from './Purchase'
import Sales from './Sales'
import Service from './Service'
import ServiceDemurrage from './ServiceDemurrage'
import CreditDebit from './CreditDebit'

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
      case 'Sales':
        return setMenu(<Sales />)
      case 'Purchase':
        return setMenu(<Purchase />)
      case 'Service':
        return setMenu(<Service />)
      case 'Freight':
        return setMenu(<Freight />)
      case 'Demurrage':
        return setMenu(<Demurrage />)
      case 'FreightDemurrage':
        return setMenu(<FreightDemurrage />)
      case 'ServiceDemurrage':
        return setMenu(<ServiceDemurrage />)
      case 'CreditDebit':
        return setMenu(<CreditDebit />)
      default:
        return 'Default'
    }
  }

  const setIcon = (icon) => {
    switch (icon) {
      case 'home':
        return <HomeIcon color='primary' />
      case 'sales':
        return <MoneyIcon color='primary' />
      case 'purchase':
        return <ShoppingCartIcon color='primary' />
      case 'service':
         return <RowingIcon color='primary' /> 
      case 'freight':
        return <DirectionsBoatIcon color='primary' />
      case 'demurrage':
        return <MonetizationOnIcon color='primary' />
      case 'freightdemurrage':
        return <MoneyOffIcon color='primary' />
      case 'servicedemurrage':
        return <CreditCardIcon color='primary' />
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
