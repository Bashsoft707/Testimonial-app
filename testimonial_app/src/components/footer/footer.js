import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#25201D',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  paper: {
    textAlign: 'center',
    boxShadow: 'none',
    background: 'none',
    color: 'white',
  },
  title: {
    margin: 0,
    textAlign: 'left',
    '@media (max-width: 425px)' : {
      fontSize: '16px',
      lineHeight: '18px',
    },
  },
  listItem: {
    padding: '.5rem 0',
    '@media (max-width: 425px)' : {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  listItemIconBox: {
    padding: '.8rem 0',
  },
  listItemIcons: {
    color: 'white',
  },
}));


export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <Grid container spacing={3}>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Company
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText>About Us</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Term of Use</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Privacy Policy</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Press & Media</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText>Marketplaces</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Magazine</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Seller</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Wholesale</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Services</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          Careers
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText>Become a Campus Rep</ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText>Become a Vasiti Influencer</ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText>Become a Campus writer</ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText>Become an Affiliate</ListItemText>
          </ListItem>
        </List>
      </Paper>
      </Grid>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Get in touch
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText>Contact us</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Partner with us</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Advertise with us</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Help/FAQs</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={6} md={3}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.title}>
            Join our community
          </Typography>
          <List>
            <ListItem className={classes.listItemIconBox}>
              <ListItemIcon className={classes.listItemIcons}><FacebookIcon /></ListItemIcon>
              <ListItemIcon className={classes.listItemIcons}><InstagramIcon /></ListItemIcon>
              <ListItemIcon className={classes.listItemIcons}><TwitterIcon /></ListItemIcon>
              <ListItemIcon className={classes.listItemIcons}><LinkedInIcon /></ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Email Newsletter</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
      </Container>
    </footer>
  );
}