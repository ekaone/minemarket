import React from 'react'
import SpeedIcon from '@material-ui/icons/Speed';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import deepOrange from "@material-ui/core/colors/deepOrange";
import indigo from "@material-ui/core/colors/indigo";

const cDeepOrange = deepOrange[500];
const cIndigo = indigo["A700"];

function View(props) {

  return (
    <>
      <Box display="flex" justifyContent="center" p={1}>
        <Box p={1}>
          <SpeedIcon style={{ color: cIndigo, fontSize: 35 }} />
        </Box>
        <Box p={1} fontSize={22}>
          {props.title}
          <Typography component="div">
            <Box fontStyle="italic" color={cDeepOrange} fontSize={12} m={0}>{props.subHeader}</Box>
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default View

/**
 * Icon source: https://material-ui.com/components/material-icons/
 */


// import red from "@material-ui/core/colors/red";
// import deepOrange from "@material-ui/core/colors/deepOrange";
// import purple from "@material-ui/core/colors/purple";
// import indigo from "@material-ui/core/colors/indigo";

// const cRed = red[500];
// const cPurple = purple[900];
// const cIndigo = indigo[700];
// const cDeepOrange = deepOrange[500];
