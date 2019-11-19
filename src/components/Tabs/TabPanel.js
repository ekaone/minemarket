import React from 'react'
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";


export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <Box
       p={1}
       component="div" 
       display="block"
      >
        {children}
      </Box>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

