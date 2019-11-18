import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function TextAlignment() {
  return (
    <Typography >
      <Box textAlign="right" m={1}>
        Forgot password?
      </Box>
    </Typography>
  );
}