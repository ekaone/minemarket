import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/**
 * @material-ui/icons
 */
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'; 
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import GavelIcon from '@material-ui/icons/Gavel';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import WavesIcon from '@material-ui/icons/Waves';
import TramIcon from '@material-ui/icons/Tram';

/**
 * @material-ui/core
 */
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      margin: theme.spacing(0, 0),
    },
  },
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <>
    <Grid container alignItems="center" className={classes.root}>
      <AirportShuttleIcon />
      <LocalShippingIcon />
      <TrendingUpIcon />
      <EmojiPeopleIcon />
      <FlightTakeoffIcon />
      <GavelIcon />
      <GroupAddIcon />
      <LocalCarWashIcon />
      <PersonPinCircleIcon />
      <WavesIcon />
      <TramIcon />
      <FormatAlignLeftIcon fontSize="small" />
      <FormatAlignCenterIcon fontSize="small" />
      <FormatAlignRightIcon style={{ fontSize: 14 }} />
      <FormatBoldIcon />
      <FormatItalicIcon />
      <FormatUnderlinedIcon />
    </Grid>
    </>
  );
}
