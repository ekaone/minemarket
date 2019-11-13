import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

function Header(props) {
  return (
    <>
      <Typography component="div">
        <Box fontSize={30} display="flex" justifyContent="center" p={1}>
          <Box p={1}>
            {props.value}
          </Box>
        </Box>
      </Typography>
    </>
  )
}

export default Header
