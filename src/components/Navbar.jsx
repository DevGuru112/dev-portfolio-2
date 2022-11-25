import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import myImage from '../image/profile-pic (5).png';
import { makeStyles } from '@material-ui/core/styles';
import SliderOpen from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';

// CSS for sidebar and myImage
const useStyles = makeStyles((theme) => ({
  menuSlide: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('img/1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  },
  myImage: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listText: {
    color: '#EAECEE',
  },
  listIcon: {
    color: 'tan',
  },
  fixed: {
    overflow: 'hidden',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '100'
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <BuildIcon />,
    listText: 'Skills',
    listPath: '/skills',
  },
  {
    listIcon: <SchoolIcon />,
    listText: 'Education',
    listPath: '/education',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts',
  },
];

function Navbar() {
  const classes = useStyles();
  const [slider, Setslider] = useState({
    right: false,
  });
  const toggleSlide = (toggler, open) => () => {
    Setslider({ ...slider, [toggler]: open });
  };
  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSlide}
      onClick={toggleSlide(slider, false)}
    >
      <Avatar className={classes.myImage} src={myImage} alt="Dentarious Horn" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav" className={classes.fixed}>
        <AppBar position="static" style={{ backgroundImage: "url('img/2.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <Toolbar>
            <IconButton onClick={toggleSlide('right', true)}>
              <ClearAllIcon style={{ background: '#E74C3C' }} />
            </IconButton>
            <Typography variant="h5">
              <a
                href="/"
                style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                }}
              >
                Dentarious Horn
              </a>
            </Typography>
            <SliderOpen
              anchor="left"
              open={slider.right}
              onClose={toggleSlide('right', false)}
            >
              {sideList('right')}
              <Footer />
            </SliderOpen>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
