import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

import {
  CButton,
  CAppBar,
  CTabs,
  CDrawer,
  CListItem
} from '../componentstyles'

import {
  Dashboard,
  NavigationDrawer,
  PermanentDrawer,
  MarryDoe,
  JohnDoe,
  Batman,
  Jocker,
  BlackLabel,
  JohnnyWalker,
  Login, 
  PageRouter,
  SupplyChain,
  Tabs,
  Reporting,
  ChartLine,
  Barge,
  Explorer,
  Keyboard,
  Helpers,
  Invoices,
  Payment
} from '../components'

function Apps() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Router>
        <Route exact path="/" component={PageRouter} />
        <Route exact path="/explorer" component={Explorer} />
        <Route exact path="/barge" component={Barge} />
        <Route exact path="/invoices" component={Invoices} />
        <Route exact path="/payment" component={Payment} />
      </Router>
    </>
  )
}

export default Apps