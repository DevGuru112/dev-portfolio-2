import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../image/profile-pic (8).png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import HomeContract from './HomeContract';

//css style
const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(5),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avater} src={avatar} alt="Dentarious Horn" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Dentarious Horn', 'Horn']} typeSpeed={100} backSpeed={60} loop />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            'Full Stack Developer',
            'Blockchain Engineer',
          ]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
        <HomeContract />
      </Typography>
    </Box>
  );
};

export default Header;
