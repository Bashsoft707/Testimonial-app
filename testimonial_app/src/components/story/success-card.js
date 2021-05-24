import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '327px',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '1rem',
    margin: '2rem auto',
    textAlign: 'center',
  },
  title: {
    fontSize: 72,
    lineHeight: 1.7,
  },
  subTitle: {
    fontSize: '28px',
    lineHeight: '33px',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  pos: {
    marginBottom: 12,
  },
  close: {
    margin: '0 auto',
    background: '#FF5C00',
    boxShadow: '2px 8px 30px rgba(230, 83, 0, 0.18)', 
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export default function SuccessCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          🎉
        </Typography>
        <Typography variant="h5" component="h2" className={classes.subTitle}>
          Thank you for sharing your story!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="primary"
          className={classes.close}
          >
          <Link className={classes.link} to='/story'>Close</Link>
          </Button>
      </CardActions>
    </Card>
  );
}