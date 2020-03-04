import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HerStatus from './cards/HER2status';
import PnStatus from './cards/PnStatus';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color: '#3E3E3E',
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
  },
  button:{
      marginRight:10,
  }
});
export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <div>
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Wat is de hormoon- en HER2 status (postoperatief)?
        </Typography>
        <HerStatus/>
        <Grid container direction="column-reverse" justify="space-around" alignItems="flex-end">
            <Button className={classes.button} color="primary" edge="flex-end" size="small">Keuze hulp</Button>
        </Grid>
      </CardContent>
      
    </Card>
    <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Wat is de hormoon- en HER2 status (postoperatief)?
        </Typography>
        <PnStatus/>
        <Grid container direction="column-reverse" justify="space-around" alignItems="flex-end">
            <Button className={classes.button} color="primary" edge="flex-end" size="small">Keuze hulp</Button>
        </Grid>
        </CardContent>
        
    </Card>
    </div>
  );
}
