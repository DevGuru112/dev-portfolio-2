import React from 'react';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  Particles: {
    position: 'fixed',
    opacity: '0.5',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.2rem',
    color: '#fff',
    background: 'tomato',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: 'tomato',
  },
  subtitle1: {
    color: 'tan',
  },
  marginTop: {
    marginTop: '64px'
  }
}));

// educations
const educations = [
  {
    id: 1,
    year: 'February 2020 - March 2020',
    universityName: 'Advanced Python/Django Course, Udemy',
    department: 'Certified Advanced Python/Django Course',
    description: '',
  },
  {
    id: 2,
    year: 'November 2019 - December 2019',
    universityName: 'Advanced React Course, Udemy',
    department: 'Certified React Course',
    description: '',
  },
  {
    id: 3,
    year: 'April 2007 - April 2011',
    universityName: 'Tuskegee University',
    department: 'Bachelor of Science in Computer Science & Engineering',
    description: '',
  },
];

const Education = () => {
  const classes = useStyles();
  return (
    <>
    
      <Navbar />
      <Particles
        canvasClassName={classes.Particles}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Box component="header" className={classes.marginTop} >
        <Typography variant="h4" align="center" className={classes.heading}>
          Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {/* start */}
          {educations.map((education) => (
            <>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                {education.year}
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  {education.universityName}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  {education.department}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  {education.description}
                </Typography>
              </Box>
            </>
          ))}
          {/* end */}
        </Box>
      </Box>
    </>
  );
};

export default Education;
