import React from 'react';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  Particles: {
    position: 'fixed',
    opacity: '0.6',
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
    fontSize: '1.8rem',
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

// Resumes
const resumes = [
  {
    id: 1,
    year: '2022',
    role: 'Senior Full Stack Developer',
    companyName: 'Aquent, United States',
    companyUrl: 'https://aquent.com/',
    description:
      "1. Built a number of React-based front-end projects with React trending technologies such as React hooks, HOCs, Redux and more. 2. Integrated Redux-saga, MobX, and ontext API for the state management and Formik and Yup for validation. 3. Worked in agile sprints building new features and enhancing existing areas of our tools using Laravel, PHP, React.js, MySQL and AWS. 4. Contributed mainly to back-end development with a focus on maintainability, usability, scalability, and performance, helping with front-end and full-stack projects as necessary.\n"
  },
  {
    id: 2,
    year: '2020',
    role: 'Senior Blockchain Developer',
    companyName: 'ICO Development, United States',
    companyUrl: 'https://www.icodevelopment.io/',
    description:
      "As a Senior Blockchain developer, I have architected and developed Sngular ecosystem on Ethereum. 1. Migrated GraphQL for improving the page load speed, server-side     rendering, and code splitting. 2. Written smart contracts for ERC-20, ERC-223, ERC-721, ERC-721A, ERC-1155, ICO, Vesting, MultiSig, Wallet, etc. 3. Participated in Cryptocurrency Exchange Platform Development: Charge of hot, cold, warm wallet development."
  },
  {
    id: 3,
    year: '2017',
    role: 'Solidity and FE developer Developer',
    companyName: 'Crionx, United States',
    companyUrl: 'https://crionx.com/',
    description:
      "1. developed staking token based on ERC-20 and investor wallet 2. developed cryptocurrency payment gateway that supports Bitcoin, Ethereum, ERC-20 Tokens, Dash, Tron, etc."
  },
  {
    id: 4,
    year: '2016',
    role: 'Software Developer',
    companyName: 'Upwork.com',
    companyUrl: 'https://upwork.com',
    description:
      "1. Designing, building, and unit testing software in a collaborative environment. 2. Creating, improving, and maintaining backend processes per Product Requirements. 3. Dealing with large data sets, relational and object databases. 4. Collaborating with product managers and other business-side stakeholders to brainstorm, design, and reate features and applications. 5. Translating business requirements, mockups, and other product manager input into achievable milestones and code."
  },
  {
    id: 5,
    year: '2012',
  },

];

const Resume = () => {
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
      <Box component="header" className={classes.marginTop}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {/* start */}
          {resumes.map((resume, index) => (
            <>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                {resume.year}
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  {resume.role}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  <a
                    style={{ textDecoration: 'none', color: 'tomato' }}
                    href={resume.companyUrl}
                    target="blank"
                  >
                    {resume.companyName}
                  </a>
                </Typography>

                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  {resume.description}
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

export default Resume;
