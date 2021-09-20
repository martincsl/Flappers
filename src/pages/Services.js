import React from 'react';

import { Grid, Paper, Box, Typography, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import iconCash from '../assets/cash.png';
import iconGraph from '../assets/graph.png';
import iconCoins from '../assets/coins.png';
import iconApp from '../assets/app-money.png';
import iconFolder from '../assets/folder.png';
import iconSaving from '../assets/saving.png';

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
    marginBottom: "10px",
  },
  boxStyle:{
    width: "100%",   
    padding: "1px",   
    color: "white",
    backgroundColor: mainTheme.palette.secondary.main,
    marginBottom: "1px",
  },
  paperStyle:{
    width: "100%",   
    height:"100%",
    marginLeft:"auto",
    marginRight:"auto",
    [mainTheme.breakpoints.up('md')]: {
      "&:hover": {
        marginTop:"-5px",
    }      
  }},
  iconStyle:{
    textAlign: "center",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "10px",
  }
}))  

export default function Services (){

  const classes = useStyles();
  return(
    <>
    <Header />
    
    <Grid container direction="column" alignItems="center" className={classes.contentStyle} style= {{ minHeight: '90vh'}}>
      <Grid item xs={12} style= {{ minHeight: '0vh'}}/> 
      <Grid item xs={12} style= {{ width: '100%'}}>
        <Box className={classes.titleStyle}>      
          <Typography align="center" variant="h6" ><b>Servicios</b></Typography>
        </Box>
      </Grid>
      
      <Grid item container direction="row" spacing={2} xs={12}>
        <Grid item direction="row" spacing={1} xs={12} sm={6} md={4}>
      <Slide in direction = "up" timeout = {1000}> 
          <Paper elevation={1} className={classes.paperStyle} style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle}><b>Presupuesto anual con control mensual</b></Typography>
            <img src={iconCash} alt = "Presupuesto" className={classes.iconStyle} />  
            <Typography display="block" align="center" variant="body1"><b>"No hay viento favorable para un barco sin rumbo".</b></Typography>
            <Typography display="block" align="center" variant="body2">Sabes hacia donde vas y que necesitas para lograrlo? Con el presupuesto podes proyectar tus ventas, gastos y ganancias, con un monitoreo constante para hacer las correcciones a tiempo.</Typography>
          </Paper>
          </Slide> 
        </Grid>

        <Grid item direction="row" spacing={2} xs={12} sm={6} md={4}>
        <Slide in direction = "up" timeout = {1200}> 
          <Paper elevation={1} className={classes.paperStyle} style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle}><b>Proyección de flujo de caja</b></Typography>
            <img src={iconGraph} alt = "Flujo de Caja" className={classes.iconStyle} />  
            <Typography display="block" align="center" variant="body1"><b>Sabes cuanto realmente generás de caja? </b></Typography>
            <Typography display="block" align="center" variant="body2">Muchas empresas tienen ganancia contable pero flujo de caja negativo. Si la ganancia que figura en tu balance no aparece en la cuenta bancaria, podemos ayudarlo.</Typography>
          </Paper> 
          </Slide> 
        </Grid> 

        <Grid item direction="row" spacing={2} xs={12} sm={6} md={4}>
        <Slide in direction = "up" timeout = {1400}> 
          <Paper elevation={1} className={classes.paperStyle}  style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle}><b>Preparación de documentos para bancos</b></Typography>
            <img src={iconCoins} alt = "Documentos para Bancos" className={classes.iconStyle}/>  
            <Typography display="block" align="center" variant="body1"><b>No avanzás con el banco porque siempre falta algo? </b></Typography>
            <Typography display="block" align="center" variant="body2">Nosotros preparamos y actualizamos mensualmente todos los documentos necesarios para que tengas todo al dia.</Typography>
          
          </Paper> 
          </Slide>
        </Grid> 

        <Grid item direction="row" spacing={2} xs={12} sm={6} md={4}>
        <Slide in direction = "up" timeout = {1600}> 
          <Paper elevation={1} className={classes.paperStyle} style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle}><b>Negociacion de préstamos con instituciones</b></Typography>
            <img src={iconApp} alt = "Negociación de Préstamos" className={classes.iconStyle} />  
            <Typography display="block" align="center" variant="body1"><b>El banco no aprueba el préstamo ? </b></Typography>
            <Typography display="block" align="center" variant="body2">Nosostros te ayudamos en la negociación de créditos, factoring o venta de cartera con bancos, financieras y otras instituciones.</Typography>
          </Paper>
        </Slide>  
        </Grid>

        <Grid item direction="row" spacing={2} xs={12} sm={6} md={4}>
        <Slide in direction = "up" timeout = {1600}>
          <Paper elevation={1} className={classes.paperStyle} style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle} ><b>Analisis de proyectos de inversión</b></Typography>
            <img src={iconSaving} alt = "Proyectos de Inversión" className={classes.iconStyle} style={{height:'65px'}}/>  
            <Typography display="block" align="center" variant="body1"><b>Vale la pena la nueva inversión que queres hacer?</b></Typography>
            <Typography display="block" align="center" variant="body2">Como decidir si tenes mas de una alternativa? utilizamos las mejores herramientas para ayudarte.</Typography>
          
          </Paper>
          </Slide>
        </Grid>

        <Grid item direction="row" spacing={1} xs={12} sm={6} md={4}>
        <Slide in direction = "up" timeout = {1600}>
          <Paper elevation={1} className={classes.paperStyle}style={{minHeight:'30vh'}}>
            <Typography align="center" variant="subtitle1" className={classes.boxStyle}><b>Valuación de la empresa</b></Typography>
            <img src={iconFolder} alt = "Valuación" className={classes.iconStyle} />  
            <Typography display="block" align="center" variant="body1"><b>Sabes cuanto vale tu empresa? </b></Typography>
            <Typography display="block" align="center" variant="body2">Si tenes una empresa con resultados positivos y constantes, ella puede valer más de lo que te imaginas.</Typography>
          </Paper>
          </Slide>
        </Grid>
      </Grid>
    
      <Grid style={{height:'8vh'}} />
    </Grid> 
    
    <Footer />
    </>
  )
}