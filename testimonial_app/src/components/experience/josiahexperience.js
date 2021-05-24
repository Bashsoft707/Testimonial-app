import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import JosiahImage from '../../assets/images/woman-shoppingbag-card1.png'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#FFF8F5',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  paper: {
    textAlign: 'center',
    boxShadow: 'none',
    background: 'none',
    padding: '8rem 8rem 0',
    '@media (max-width: 425px)' : {
      padding: '0',
    },
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '538px',
    '@media (max-width: 425px)' : {
      height: '281px',
      width: '281px',
      objectFit: 'cover',
      margin: '0 auto',
    },
  },
  mainFeaturedPostContent: {
    position: 'relative',
    textAlign: 'left',
    width: '30vw',
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
    color: 'rgb(255, 92, 0)',
    background: 'none',
    border: '1px solid rgb(255, 92, 0)',
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
    color: 'rgb(255, 92, 0)',
    textTransform: 'uppercase',
    letterSpacing: 3,
    lineHeight: 1.7,
    '@media (max-width: 425px)' : {
      fontSize: '16px',
      lineHeight: '16px',
    },
  },
  JosiahImage: {
    width: 'auto',
    objectFit: 'cover',
    '@media (max-width: 425px)' : {
      height: '261px',
      width: '303px',
    },
  },
}));

export default function JosiahExperience() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h4" variant="h4" color="inherit" className={classes.mainFeaturedPostContentTitle} gutterBottom>
                      Josiah’s Experience
                    </Typography>
                    <Typography component="h5" variant="h5" color="inherit" gutterBottom>
                      <button className={classes.mainFeaturedPostContentButton}>VENDOR</button>
                    </Typography>
                    <Typography component="h5" variant="h5" color="inherit" className={classes.mainFeaturedPostContentDescription} gutterBottom>
                      I had the best experience shopping with vasiti. Usability of the website was great, 
                      very good customer service, an all round great experience. I would definately be coming back! 
                      I had the best experience shopping with vasiti. Usability of the website was great, 
                      very good customer service, an all round great experience. 
                      I would definately be coming back!
                    </Typography>
                    <Typography component="h6" variant="h6" color="inherit" className={classes.mainFeaturedPostContentFlag} gutterBottom>
                      Share your own story!
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                  <div className={classes.mainFeaturedPost}>
                      <img src={JosiahImage} alt={"Img"} className={classes.JosiahImage}/> 
                  </div>
              </Paper>
          </Grid>
        </Grid>
      </div>
  );
}
