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

export default function Testimonial() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse-22.png`} alt="Ellipse22" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small">
                      In Ikeja
                    </Button>
                    <Button size="small" color="primary">
                      CUSTOMER
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joseph Ike
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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse23.png`} alt="Ellipse22" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small">
                      In Ibadan
                    </Button>
                    <Button size="small" color="primary">
                      CUSTOMER
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Adetola Fashina
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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse24.png`} alt="Ellipse22" /> 
                  </CardMedia>
                  <CardActions className={classes.cardActions}>
                    <Button size="small">
                      In Akoka
                    </Button>
                    <Button size="small" color="primary">
                      CUSTOMER
                    </Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Emmanuel Fayemi
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse22.png`} alt="Ellipse22" /> 
                </CardMedia>
                <CardActions className={classes.cardActions}>
                  <Button size="small">
                    In Magodo
                  </Button>
                  <Button size="small" color="primary">
                    VENDOR
                  </Button>
                </CardActions>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chisom Obilor
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse23(1).png`} alt="Ellipse22" /> 
                </CardMedia>
                <CardActions className={classes.cardActions}>
                  <Button size="small">
                    Iwo Road
                  </Button>
                  <Button size="small" color="primary">
                    VENDOR
                  </Button>
                </CardActions>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Adunoluwa Adeyemi
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse24(1).png`} alt="Ellipse22" /> 
                </CardMedia>
                <CardActions className={classes.cardActions}>
                  <Button size="small">
                    In Shomolu
                  </Button>
                  <Button size="small" color="primary">
                    VENDOR
                  </Button>
                </CardActions>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chidi Okeke
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
      </main>
    </React.Fragment>
  );
}