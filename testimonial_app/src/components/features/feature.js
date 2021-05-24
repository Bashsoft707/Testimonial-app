import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FeatureImage from '../../assets/images/subscribe-banner 1.png'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#25201D',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  paper: {
    textAlign: 'center',
    color: 'white',
    boxShadow: 'none',
    background: 'none',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '414px',
    height: '406px',
    '@media (max-width: 425px)' : {
      height: '389px',
      width: '389px',
      objectFit: 'cover',
      marginTop: 10,
    },
    marginTop: '-5vh',
  },
  mainFeaturedPostContent: {
    width: '40vw',
    position: 'relative',
    textAlign: 'left',
    padding: '5rem 4rem',
    '@media (max-width: 425px)' : {
      width: '90vw',
      padding: '4rem 1rem',
      paddingRight: 0,
    },
  },
  mainFeaturedPostContentTitle: {
    lineHeight: '39px',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '-0.01em',
  },
  mainFeaturedPostContentDescription: {
    marginBottom: '3rem',
  },
  mainFeaturedPostContentSearchBar: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '.3rem .3rem .3rem 1.5rem',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainFeaturedPostContentInput: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'white',
  },
  mainFeaturedPostContentButton: {
    padding: '1rem',
    background: 'white',
    border: 'none',
    borderRadius: '3px',
    textTransform: 'uppercase',
    fontSize: '15px',
  },
  mainFeaturedPostContentFlag: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    lineHeight: 1.7,
  },
  FeatureImage: {
      width: '381px',
      heigth: '389px',
    '@media (max-width: 425px)' : {
      width: '381px',
      heigth: '389px',
      objectFit: 'cover'
    },
  },
}));

export default function Feature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <div className={classes.mainFeaturedPost}>
                    <img src={FeatureImage} alt={"Img"} className={classes.FeatureImage}/> 
                </div>
            </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h4" variant="h4" color="inherit" className={classes.mainFeaturedPostContentTitle} gutterBottom>
                    Be a  member of our community 🎉
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" className={classes.mainFeaturedPostContentDescription} gutterBottom>
                    We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                  </Typography>
                  <Typography component="h5" variant="h5" color="inherit" className={classes.mainFeaturedPostContentSearchBar} gutterBottom>
                    <input type="text" placeholder="enter your email address" className={classes.mainFeaturedPostContentInput} />
                    <button className={classes.mainFeaturedPostContentButton}>Subscribe</button>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
