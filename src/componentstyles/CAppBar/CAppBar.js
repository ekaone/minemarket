import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAppBar: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(180deg, rgba(21,13,166,1) 0%, rgba(3,27,28,1) 100%, rgba(158,27,142,1) 100%, rgba(172,27,152,0.8715861344537815) 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 25,
        padding: '0 5px',
        boxShadow: '0 1px 3px 1px rgb(21,13,166)',
        textTransform: 'none'
      },
    },
  },
});
export default function CAppBar() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          News News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
    </>
  );
}