import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  
}));

export default function SwitchExplorer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleChange = event => {
    setOpen(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={open} onChange={handleChange} aria-label="explorer switch" />}
          label={open ? 'Close' : 'Open'}
        />
      </FormGroup>
    </div>
  );
}
