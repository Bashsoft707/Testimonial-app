import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import {ReactComponent as VasitiLogo} from '../../assets/images/Vasiti-Logo-black.svg';
import './header.css';
import { Link } from 'react-router-dom';

const font = "'Roboto', sans-serif";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 'word-spacing(2)',
  },
  header: {
    background: 'white',
    color: 'black',
    fontFamily: font,
    marginBottom: '30px',
    '@media (max-width: 425px)' : {
      background: 'none',
      boxShadow: 'none',
    },
  },
  navbar: {
    borderBottom: '1px solid black',
    padding: '15px',
    '@media (max-width: 425px)' : {
      borderBottom: 'none',
    },
  },
  navbarList: {
    width: '80vw',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    padding: '0 2rem',
  },
  navbarListItems: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navbarListItemsButtons: {
    padding: '1rem',
    fontWeight: 600,
  },
  subNavbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 15px',
    height: 0,
  },
  subNavbarbuttons: {
    padding: '17px 32px',
    fontFamily: font,
    fontSize: '15px',
    fontStyle: 'normal',
    lineHeight: '15px',
    letterSpacing: '0.05em',
    minHeight: 64,
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

 function Header(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.navbar}>
          <div className={classes.navbarList}>
            <Typography variant="h6" className={classes.title}>
              <VasitiLogo />
            </Typography>
            <Hidden only={['sm', 'xs']}>
              <div className={classes.navbarListItems}>
                <Button color="inherit" className={classes.navbarListItemsButtons}>About Us</Button>
                <Button color="inherit" className={classes.navbarListItemsButtons}>
                  <Link className={classes.link} to='/story'>Stories</Link>
                </Button>
                <Button color="inherit" className={classes.navbarListItemsButtons}>Contact</Button>
                <Button color="inherit" className={classes.navbarListItemsButtons}>Log In</Button>
                <Button color="inherit" className={classes.navbarListItemsButtons}>Sign Up</Button>
              </div>
            </Hidden>
          </div>
        </Toolbar>

        <Hidden only={['sm', 'xs']}>
          <Toolbar className={classes.subNavbar}>
            <Button color="inherit" className={classes.subNavbarbuttons}>MarketPlace</Button>
            <Button color="inherit" className={classes.subNavbarbuttons}>Wholesale Center</Button>
            <Button color="inherit" className={classes.subNavbarbuttons}>Seller Center</Button>
            <Button color="inherit" className={classes.subNavbarbuttons}>Services</Button>
            <Button color="inherit" className={classes.subNavbarbuttons}>Internship</Button>
            <Button color="inherit" className={classes.subNavbarbuttons}>Events</Button>
          </Toolbar>
        </Hidden>
      </AppBar>
  
    </div>
  );
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Header);