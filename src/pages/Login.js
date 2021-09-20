import React, {useState} from 'react';

import { Grid, Paper, Typography, TextField, Button, Box, Grow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CastConnectedIcon from '@material-ui/icons/CastConnected';

import Header from       '../components/Header.js';
import Footer from       '../components/Footer.js';
import AlertMessage from '../components/AlertMessage.js';
import useForm from      '../components/useForm.js';

const useStyles = makeStyles( (mainTheme) => ({
  contentStyle: {
    position: 'absolute',
    top: '65px'
  },
  paperStyle: {
    margin: 'auto',
    padding:'10px',
    minWidth: 350,
    maxWidth:500,
    backgroundColor:mainTheme.palette.secondary.main,  
  },
  paperAlertStyle: {
    margin: 'auto',
    padding:'10px',
    minWidth: 350,
    maxWidth:500,
    backgroundColor:"red",  
  },
  buttonStyle:{
    color: "white",
    backgroundColor:mainTheme.palette.primary.main,
    textTransform:"none",
    margin: "10px",
//    marginTop: "15px",
    "&:hover": {
      color:mainTheme.palette.secondary.main,
      backgroundColor:mainTheme.palette.primary.main,
    },
  },
  iconBox:{
    width:'100%',
    textAlign: 'center',
    AlignItems: 'center',
  },
  iconStyle:{
    color: mainTheme.palette.primary.main, 
  },
  inputStyle: {
    background: "white",
  },
  alertStyle:{
    position:'relative',
    top: '180px'
  },
  formStyle:{
    backgroundColor:'orange'
  }
}))

export default function Login () {

  const classes = useStyles();  
  const { handleChange, handleSubmit, chkBlankFormLogin, chkFormErrors, isValidUser, isValidPassword, values, formErrors } = useForm (submit);
  const { user, password } = values;
  const [ isAlertOpen, setIsAlertOpen] = useState(false);
  const [ dialogMessage, setDialogMessage] = useState({severity:"", title:"", message:""});
 
  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  function submit() {
    if (chkBlankFormLogin ()){
      setDialogMessage(prevState => ( {...prevState, severity:"error", title: "Error en entrada de datos", message:"Favor completar los dados marcados como requeridos, gracias!"}));
      setIsAlertOpen(true);
 
    } else if (chkFormErrors()) {
      setDialogMessage(prevState => ( {...prevState, severity:"error", title: "Error en entrada de datos", message:"Favor corregir los dados marcados como incorrectos, gracias!"}));
      setIsAlertOpen(true);
   
      } else {
        setDialogMessage(prevState => ( {...prevState, severity:"error", title: "Inicio de sesión", message:"Este nombre de usuario no fue encontrado. Favor verificar y volver a cargar."}));
        setIsAlertOpen(true);
      }
  } //submit

  return (
    <>
    <Header />

    <Grid container direction="row" alignItems="center" justify="center" className={classes.contentStyle} style={{ minHeight:'70vh'}}>
      <Grid />
      <Grow in timeout = {1000}>
      <Grid className={classes.formStyle}>
        <Paper elevation={6} spacing={2} className={classes.paperStyle}>
          <form onSubmit={handleSubmit} noValidate>
            <Typography align="center" variant="subtitle1" style={{color:'white'}} gutterBottom>Conectarse a la Plataforma de Flappers</Typography>
            <Box className={classes.iconBox} >
              <CastConnectedIcon className={classes.iconStyle} style={{ fontSize: 40 }}/>
            </Box>
            <Grid xs={12}> 
              <TextField id="user" label="Nombre de usuario *" 
                variant ="filled" margin="dense" size="small" fullWidth  
                name="user" value={user} onChange={ (e) => handleChange (e,[isValidUser])}
                  ></TextField>
                {formErrors.user ? <div className="error-helper-text">{formErrors.user}</div> : null}
            </Grid>
            <Grid xs={12} md={9}> 
              <TextField id="password" label="Contraseña *"
                  variant ="filled" margin="dense" size="small" type="password" fullWidth
                  name="password" value={password} onChange={(e) => handleChange (e,[isValidPassword])}
                  ></TextField>
                {formErrors.password ? <div className="error-helper-text">{formErrors.password}</div> : null}
            </Grid>  
            <Grid container direction="row" alignItems="center" justify="center"> 
              <Button type="submit" className={classes.buttonStyle} variant="outlined" disableRipple >Iniciar Sesión</Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
      </Grow>
      <Grid />
    </Grid>
  
    <AlertMessage open={isAlertOpen} onClose={handleAlertClose} severity={dialogMessage.severity} title={dialogMessage.title}>
      {dialogMessage.message}
    </AlertMessage>

    <Footer />
    </>
  )
}