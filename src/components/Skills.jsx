import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
    padding: '1rem',
  },
  cardContainer: {
    maxWidth: 450,
    margin: '0.2rem auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },
  projectName: {
    color: 'tomato',
    fontSize: '20px',
  },
  language: {
    background: 'white',
    margin: '1.5rem auto',
    borderRadius: '0.5rem ',
    padding: '1.5rem',
  },
  languageView: {
    display: 'flex',
    color: 'tomato',
  },
});

const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'TypeScript',
    logo:
      'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'Firebase',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    title: 'Bootstrap',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'MySQL',
    logo:
      'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'Material-UI',
    logo:
      'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'PHP',
    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
  },
  {
    title: 'VS Code',
    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  {
    title: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
  {
    title: 'Linux',
    logo:
      'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png',
  },
  {
    title: 'npm',
    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg',
  },
  {
    title: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  },
];
function Skills() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          MY SKILLS
        </Typography>
        <div className={classes.language}>
          <Grid container justify="center">
            {skills.map((skill, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        <span className={classes.languageView}>
                          <Avatar
                            src={skill.logo}
                            style={{ marginRight: '10px' }}
                          />
                          {skill.title}
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default Skills;
