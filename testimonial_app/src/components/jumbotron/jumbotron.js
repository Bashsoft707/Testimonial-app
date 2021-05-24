import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import JumbotronImage from '../../assets/images/Testimonial-image.png'; 
import './jumbotron.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    boxShadow: 'none',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '711px',
    heigth: '568px',
    '@media (max-width: 425px)' : {
      height: '506px',
      width: '500px',
      objectFit: 'cover'
    },
  },
  mainFeaturedPostContent: {
    position: 'relative',
    width: '45vw',
    margin: '5rem 10rem',
    '@media (max-width: 425px)' : {
      width: '90vw',
      margin: '1rem',
    },
    padding: '1rem',
    textAlign: 'left',
  },
  
  mainFeaturedPostContentTitle: {
    color: 'black',
    lineHeight: '60px',
    fontSize: '48px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    '@media (max-width: 425px)' : {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  mainFeaturedPostContenDescription: {
    paddingRight: '10rem',
    '@media (max-width: 425px)' : {
      fontSize: '18px',
      lineHeight: '31px',
      paddingRight: 0,
    },
  },
  JumbotronImage: {
    width: '536px',
    heigth: '568px',
    '@media (max-width: 425px)' : {
      height: '506px',
      width: '477px',
      objectFit: 'cover'
    },
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ width: '1200', height: '568' }} direction="row" justify="flex-start">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h4" variant="h4" color="inherit" className={classes.mainFeaturedPostContentTitle} gutterBottom>
                    Amazing <br /> Experiences from Our Wonderful Customers
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" gutterBottom className={classes.mainFeaturedPostContenDescription}>
                    Here is what customers and vendors are saying about us, you can share your stories with us too.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className={classes.mainFeaturedPost}>
              <img src={JumbotronImage} alt={"Img"} className={classes.JumbotronImage}/> 
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
