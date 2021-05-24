import React, {useState} from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import storage from '../../firebase/firebase-utils';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '527px',
        background: '#FFFFFF',
        borderRadius: '16px',
        margin: '2rem auto',
        padding: '1rem',
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    display: 'flex',
  },
  radioBox: {
    display: 'inline',
    fontSize: '14px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#FF5C00',
    boxShadow: '2px 8px 30px rgba(230, 83, 0, 0.18)', 
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'capitalize',
  },
}));

export default function Story() {
  const classes = useStyles();

  const [value, setValue] = React.useState('customer');
  const [image , setImage] = useState('');

  const upload = ()=>{
    if(image == null)
      return;
    storage.ref(`/images/${image.name}`).put(image)
    .on("state_changed" , alert("success") , alert);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container component="main"  className={classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Share your amazing story!
        </Typography>
        <form className={classes.form} Validate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                accept="image/*"
                name="image"
                type="file"
                onChange={(e)=>{setImage(e.target.files[0])}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <AttachFileIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />         
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="story"
                label="Share your story"
                name="name"
                autoComplete="text"
              />
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">What did you interact with Vasiti as?</FormLabel>
                    <RadioGroup aria-label="status" name="status1" value={value} onChange={handleChange} className={classes.radioBox} color="#FF5C00">
                        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                        <FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
                    </RadioGroup>
                </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="story"
                label="City or Higher Institution (for Students)"
                name="name"
                autoComplete="text"
              />
            </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={upload}
              >
                <Link className={classes.link} to='/successcard'>Share your storys!</Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}