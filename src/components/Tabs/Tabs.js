import React from 'react';

// components 3rd party
import SwipeableViews from 'react-swipeable-views';

// components @material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// components units
import SupplyChain from '../SupplyChain'
import TabPanel from './TabPanel'
import Reporting from '../Reporting'

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsHeader() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab style={{paddingLeft: 0, paddingRight: 0}} label="Supply Chain" {...a11yProps(0)} />
          <Tab label="Quality"  {...a11yProps(1)} />
          <Tab label="Material" {...a11yProps(2)} />
          <Tab label="Reporting" {...a11yProps(3)} />
          <Tab label="Contracts" {...a11yProps(4)} />
          <Tab label="Transport" {...a11yProps(5)} />
          <Tab label="Organization" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <SupplyChain />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Reporting />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item 6
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
