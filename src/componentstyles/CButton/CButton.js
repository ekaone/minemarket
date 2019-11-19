import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'green',
          boxShadow: '0 1px 3px 1px rgb(13,166,36)'
        },
        background: 'blue'
      },
      text: {
        // background: 'linear-gradient(180deg, rgba(21,13,166,1) 0%, rgba(3,27,28,1) 100%, rgba(158,27,142,1) 100%, rgba(172,27,152,0.8715861344537815) 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 25,
        padding: '0 5px',
        boxShadow: '0 1px 3px 1px rgb(21,13,166)',
        textTransform: 'none',
        minWidth: 25
      },
    },
  },
});

const styles = { 
  textTransform: 'none',
  minWidth: 25,
  background: 'blue', 
  color: 'white',
  padding: 1,
  margin: 0,
  borderRadius: 5
}

function CButton() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
        <Button size="small" variant="contained" style={styles}>AS asdljflasd aklsdjfklasdj</Button>
        <div></div>
        <div>d</div>
        <Button size="small" variant="contained" style={styles}>AS asdljflasd aklsdjfklasdj</Button>
      {/* </ThemeProvider> */}
    </>
  );
}

export default CButton;