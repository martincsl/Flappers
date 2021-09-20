import React from 'react';
import { Link } from 'react-router-dom';

import { Hidden, Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (mainTheme) => ({
  drawer: {
    width: '240',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240',
    color: 'white',
    backgroundColor:mainTheme.palette.primary.main
  },
  drawerContainer: {
    overflow: 'auto',
    }
  })); 
  
export default function DrawerMenu ({open, handleDrawerClose}) {

  const classes = useStyles();

  return (
    <>
    <Hidden mdUp>
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="right"
      open={open}
      onClose={handleDrawerClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <div className={classes.drawerContainer}>
      <List>
        <ListItem button component={Link} to={'/whoweare'} disableRipple className={classes.buttonDrawerStyle}>
          <ListItemText primary="Quienes Somos" />
        </ListItem> 
        <ListItem button component={Link} to={'/services'} disableRipple className={classes.buttonDrawerStyle} >
          <ListItemText primary="Servicios" />
        </ListItem> 
        <ListItem button component={Link} to={'/blog'} disableRipple className={classes.buttonDrawerStyle}>
          <ListItemText primary="Blog" />
        </ListItem> 
        <ListItem button component={Link} to={'/contact'} disableRipple className={classes.buttonDrawerStyle} >
          <ListItemText primary="Contáctanos" />
        </ListItem> 
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to={'/login'} disableRipple className={classes.buttonDrawerStyle} >
            <ListItemText primary="Iniciar Sesión" />
        </ListItem> 
      </List>
    </div>
    </Drawer>
    </Hidden>
    </>
  )
}