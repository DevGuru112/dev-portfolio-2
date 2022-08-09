import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      MinWidth: 0,
      maxWidth: 50,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});
// data
const contracts = [
  {
    id: 1,
    name: 'GitHub',
    icon: GitHubIcon,
    username: 'Alex0112',
    link: 'https://github.com/devmgod',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: LinkedInIcon,
    username: 'Alex-Marquez-076926145',
    link: '',
  },
];
function HomeContract() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.root} style={{ background: 'none' }}>
        {contracts.map((contract) => (
          <BottomNavigationAction
            key={contract.id}
            icon={<contract.icon />}
            target="blank"
            href={contract.link}
            title={contract.username}
          />
        ))}
      </BottomNavigation>
    </>
  );
}

export default HomeContract;
