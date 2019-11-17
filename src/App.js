import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Dashboard,
  NavigationDrawer,
  PermanentDrawer,
  MarryDoe,
  JohnDoe,
  Batman,
  Jocker,
  BlackLabel,
  JohnnyWalker
} from './components'

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <>
    {/* <MuiThemeProvider theme={theme}>
    <CssBaseline /> */}
        
      <BlackLabel />
        
    {/* </MuiThemeProvider> */}
    </>
  );
}

export default App;
