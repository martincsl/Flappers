import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Box, Button, Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import mainLogo from '../assets/LogoFlappers.jpg';
import DrawerMenu from './DrawerMenu.js';

const useStyles = makeStyles( (mainTheme) => ({
  buttonMenuStyle:{
    color: "white",
    backgroundColor:mainTheme.palette.primary.main,
    textTransform:"none",
    margin: "2px",
    "&:hover": {
      color:mainTheme.palette.secondary.main,
    }
  },
  logoStyle:{
    position:"relative",
    top: "3px"
  },
  grow:{
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  root: {
    display: 'flex',
  },
}));

export default function Header() {

  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
    <AppBar position="fixed" style={{top:'0px'}}>
      <Toolbar style={{minWidth:'360'}}>

        <Link to={'/main'}> 
          <img src={mainLogo} className={classes.logoStyle} style={{ height: '45px'}}/>
        </Link>

        <Hidden smDown>
          <Box style={{ width: '20px' }}/>
            <Button component={Link} to={'/whoweare'} className={classes.buttonMenuStyle} size="large" disableRipple>Quienes Somos</Button>
            <Button component={Link} to={'/services'} className={classes.buttonMenuStyle} size="large" disableRipple>Servicios</Button>
            <Button component={Link} to={'/blog'} className={classes.buttonMenuStyle} size="large" disableRipple>Blog</Button>
            <Button component={Link} to={'/contact'} className={classes.buttonMenuStyle} size="large" disableRipple>Contáctanos</Button>
            <div className={classes.grow} />
              <Button component={Link} to={'/login'} className={classes.buttonMenuStyle} size="large" disableRipple>Iniciar Sesión</Button>
        </Hidden>

        <div className={classes.toolbarButtons}>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon /> 
            </IconButton>
          </Hidden>
        </div> 

      </Toolbar>
    </AppBar>
    <DrawerMenu open={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  )
}