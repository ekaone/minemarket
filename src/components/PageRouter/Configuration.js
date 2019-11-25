import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

//components assets
import CharLine from '../../assets/images/chart_line.PNG'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 350
  },
  media: {
    height: 140,
  },
});

export default function Configuration() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={CharLine}
          title="Config Page"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Configiration
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Configuration page as initial project, add Quality, Supply Chain, Material and many more
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Grid>
    </Card>
  );
}