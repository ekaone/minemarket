import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Dashboard
} from './components'

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        
          <Dashboard />
        
      </MuiThemeProvider>
    </>
  );
}

export default App;
