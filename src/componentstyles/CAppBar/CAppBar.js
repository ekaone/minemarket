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
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 50
      },
    },
    MuiIconButton: {
      root: {
        paddingLeft: 0,
        paddingTop: 0,
        margin: 'dense',
      }
    },
    MuiTypography: {
      root: {
        paddingTop: 0
      }
    },
    MuiPaper: {
      root: {
        paddingTop: 0
      }
    }
  },
});

const stylesToolbar = {
  paddingLeft: 1,
  paddingTop: 0
}

const stylesMenuIcon = {
  fontSize: 20,
  color: 'yellow'
}

const stylesAppBar = {
  height: 45
}

export default function CAppBar() {

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    <AppBar>
      <Toolbar variant="dense" style={stylesToolbar}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
        <Box display="flex" justifyContent="center" border={1}>
          <MenuIcon edge="start" style={stylesMenuIcon} />
        </Box>
        {/* </IconButton> */}
        <Typography>
          News News
        </Typography>
        
          <MenuIcon style={{ position: 'absolute', top: '0px', right: '0px' }} />
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    {/* </ThemeProvider> */}
    </>
  );
}