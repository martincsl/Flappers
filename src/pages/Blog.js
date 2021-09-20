import React from 'react';

import { Grid, Box, Typography, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const useStyles = makeStyles( (mainTheme) => ({
  contentStyle: {
    position: 'absolute',
    top: '65px'
  },
  titleStyle:{
    width: "100%",   
    padding: "15px",   
    color: mainTheme.palette.secondary.main,
    backgroundColor: "white",
    marginBottom: "0px",
  },
  bannerStyle:{
    width: "100%",   
    padding: "15px",   
    color: "white",
    backgroundColor: mainTheme.palette.secondary.main,
    marginBottom: "10px",
  },
  socialNetworkBox:{
    width:'100%',
    textAlign: 'center',
    AlignItems: 'center',
  }, 
  iconStyle:{
    color: mainTheme.palette.primary.main, 
    backgroundColor: 'white',  
    margin:'5px ',
  }
}))  

export default function Blog () {

  const classes = useStyles();  
  return (
    <>
    <Header /> 
    <Grid container direction = "column" alignItems = "center" className = {classes.contentStyle} >
      <Grid item xs={12} style= {{ minHeight: '0vh'}}/> 
      <Grid item xs={12} style= {{ width: '100%'}}>
        <Box className={classes.titleStyle}>      
          <Typography align="center" variant="h6" ><b>Blog</b></Typography>
        </Box>
      </Grid > 

      <Slide in direction = "up" timeout = {1000}>
      <Grid item xs={12}>
        <Box className = {classes.paragraphStyle}>   
          <Typography align="center" gutterBottom>En nuestro Blog todas las semanas publicamos un contenido de administración financiera.</Typography>
          <Typography align="center" gutterBottom>Inscribite para recibir semanalmente neustros contenidos gratuitamente.</Typography>
          <Typography align="center"><b>Seguinos también en las redes sociales para recibir las novedades.</b></Typography>
        </Box>
        <Box className = {classes.socialNetworkBox}>
          <LinkedInIcon className = {classes.iconStyle} style={{ fontSize: 40 }}/>
          <TwitterIcon className = {classes.iconStyle} style={{ fontSize: 40 }}/>
          <FacebookIcon className = {classes.iconStyle} style={{ fontSize: 40 }}/>
          <InstagramIcon className = {classes.iconStyle} style={{ fontSize: 40 }}/>
        </Box>
      </Grid>
      </Slide>

      <Grid item xs={12} style = {{ minHeight: '2vh'}}/> 
      <Grid item xs={12} style = {{ width: '100%'}}>
        <Box className = {classes.bannerStyle}>      
          <Typography align="center" variant="subtitle1" ><b>Publicaciones</b></Typography>
        </Box>
      </Grid>

    </Grid > 
    <Footer />
    </>
  )
}