import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    background: 'none',
  },
  cardMedia: {
    marginBottom: '1rem',
  },
  cardActions: {
    padding: 0,
    marginBottom: '1rem',
  },
  cardContent: {
    flexGrow: 1,
    padding: 0,
  },
}));

export default function VendorTestimonials() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Hidden only={['sm', 'xs']}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={8}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse22(2).png`} alt="Ellipse22" /> 
                    </CardMedia>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        CUSTOMER
                      </Button>
                    </CardActions>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                          Temi Obadofin
                      </Typography>
                      <Typography>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse23(2).png`} alt="Ellipse22" /> 
                    </CardMedia>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        VENDOR
                      </Button>
                    </CardActions>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Promise Ejiofor
                      </Typography>
                      <Typography>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                        Elit aute irure tempor cupidatat incididunt sint deser
                        unt ut voluptate aute id deserunt nisi.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse24(2).png`} alt="Ellipse22" /> 
                    </CardMedia>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        VENDOR
                      </Button>
                    </CardActions>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Feyisola Arinola
                      </Typography>
                      <Typography>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                        Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. 
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse22(3).png`} alt="Ellipse22" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                      VENDOR
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Karen Ibeh
                    </Typography>
                    <Typography>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                      Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                      Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                      Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse23(3).png`} alt="Ellipse22" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                      VENDOR
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Oluchi Uzo
                    </Typography>
                    <Typography>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                      Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                      Elit aute irure tempor cupidatat incididunt sint deser
                      unt ut voluptate aute id deserunt nisi.
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                      Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse24(3).png`} alt="Ellipse24" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                      VENDOR
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Amos Okafor
                    </Typography>
                    <Typography>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                      Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                      Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                      Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. 
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Hidden>
      </main>
    </React.Fragment>
  );
}