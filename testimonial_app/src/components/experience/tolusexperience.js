import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExperienceImage from '../../assets/images/black-beautiful-ladies-smiling.png'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#222222',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  paper: {
    textAlign: 'center',
    color: 'white',
    boxShadow: 'none',
    background: 'none',
    padding: '5rem 5rem 0',
    '@media (max-width: 425px)' : {
      padding: 0,
    },
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '711px',
    heigth: '572px',
    '@media (max-width: 425px)' : {
      height: '473px',
      width: '489px',
      objectFit: 'cover'
    },
  },
  mainFeaturedPostContent: {
    width: '30vw',
    position: 'relative',
    textAlign: 'left',
    '@media (max-width: 425px)' : {
      width: '90vw',
      padding: '4rem',
      paddingRight: 0,
    },
  },
  mainFeaturedPostContentTitle: {
    lineHeight: '39px',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '-0.01em',
    '@media (max-width: 425px)' : {
      fontSize: '24px',
      lineHeight: '29px',
    },
  },
  mainFeaturedPostContentDescription: {
    marginBottom: '3rem',
    '@media (max-width: 425px)' : {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  mainFeaturedPostContentButton: {
    padding: '.5rem',
    color: 'white',
    background: 'none',
    border: '1px solid white',
    borderRadius: '3px',
    textTransform: 'uppercase',
    fontSize: '15px',
    marginBottom: '3rem',
    letterSpacing: '-0.01em',
    '@media (max-width: 425px)' : {
      fontSize: '13px',
      lineHeight: '16px',
    },
  },
  
  mainFeaturedPostContentFlag: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    lineHeight: 1.7,
    '@media (max-width: 425px)' : {
      fontSize: '16px',
      lineHeight: '16px',
    },
  },
  ExperienceImage: {
    width: '536px',
    heigth: '568px',
    '@media (max-width: 425px)' : {
      width: '477px',
      objectFit: 'cover'
    },
  },
}));

export default function TolusExperience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
                <div className={classes.mainFeaturedPost}>
                    <img src={ExperienceImage} alt={"Img"} className={classes.ExperienceImage}/> 
                </div>
            </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h4" variant="h4" color="inherit" className={classes.mainFeaturedPostContentTitle} gutterBottom>
                    Tolu & Joy’s Experience
                  </Typography>
                  <Typography component="h5" variant="h5" color="inherit" gutterBottom>
                    <button className={classes.mainFeaturedPostContentButton}>Customer</button>
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" className={classes.mainFeaturedPostContentDescription} gutterBottom>
                    I had the best experience shopping with vasiti. Usability of the website was great, 
                    very good customer service, an all round great experience. I would definately be 
                    coming back! I had the best experience shopping with vasiti. Usability of the website 
                    was great, very good customer service, an all round great experience. I would definately be coming back!
                  </Typography>
                  <Typography component="h6" variant="h6" color="inherit" className={classes.mainFeaturedPostContentFlag} gutterBottom>
                    Share your own story!
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
