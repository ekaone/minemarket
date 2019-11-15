import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
// import NavigationTreeView from './NavigationTreeView'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  item: {
    padding: theme.spacing(0, 2)
  },
  labelIcon: {
    marginRight: theme.spacing(2)
  }
}));

function NavigationDrawer() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} className={classes.item}>
            <ListItemIcon className={classes.labelIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text} className={classes.item}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <NavigationTreeView /> */}
    </div>
  );

  const topComponentDrawer = () => (
    <>
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} className={classes.item}>
            <ListItemIcon className={classes.labelIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      </>
  )

  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="center"
      >
        <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {topComponentDrawer()}
          {sideList('left')}
        </Drawer>
      </Grid>
    </>
  )
}

export default NavigationDrawer
