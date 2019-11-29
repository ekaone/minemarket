import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    width: '100%',
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Antam', 262, 16.0, 24, 6.0),
  createData('Vale', 305, 3.7, 67, 4.3),
  createData('IHSG', 237, 9.0, 37, 4.3),
  createData('Bumi', 356, 16.0, 49, 3.9),
  createData('Han Seng Index', 159, 6.0, 24, 4.0),
];

export default function IndexWorld() {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom variant='h5'>
        Index World
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right"><ArrowDropDownIcon style={{ color: 'red' }} /></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"><ArrowDropUpIcon style={{ color: 'green' }}/></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" style={{ color: 'red' }}>{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right" style={{ color: 'green' }}>{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </>
  );
}