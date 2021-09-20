import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, Box, Typography, TextField, Button, Grow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AlertMessage from '../components/AlertMessage.js';
import useForm from '../components/useForm.js';

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
    //marginTop: "15px",
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
  formStyle:{
    backgroundColor:'orange'
  }
}))

export default function Contact () {

  const classes = useStyles();  
  const { handleChange, handleSubmit, chkBlankFormContact, chkFormErrors, noBlanks, isValidPhone, isValidEmail, values, formErrors } = useForm (submit);
  const { name, phone, email } = values;
  const [ isAlertOpen, setIsAlertOpen ] = useState(false);
  const [ dialogMessage, setDialogMessage ]= useState({severity:"", title:"", message:""})
  const history = useHistory();

  const handleAlertClose = () => {
      setIsAlertOpen(false);
      if (dialogMessage.severity==="success"){
        history.push('/main');  
      }
  };

  function submit() {
    if (chkBlankFormContact ()){
      setDialogMessage(prevState => ( {...prevState, severity:"error", title: "Error en entrada de datos", message:"Favor completar los dados marcados como requeridos, gracias!"}));
      setIsAlertOpen(true);
 
    } else if (chkFormErrors()) {
      setDialogMessage(prevState => ( {...prevState, severity:"error", title: "Error en entrada de datos", message:"Favor corregir los dados marcados como incorrectos, gracias!"}));
      setIsAlertOpen(true);
   
      } else {
        setDialogMessage(prevState => ( {...prevState, severity:"success", title: "Mensaje enviado con exito", message:"Nuestro equipo estara revisando para darle una respuesta, gracias!."}));
        setIsAlertOpen(true);
      }
  } //submit

  return (
    <div>
      <Header />

      <Grid container direction="row" alignItems="center" justify="center" className={classes.contentStyle} style={{ minHeight:'83vh'}}>
        <Grid />
        <Grow in timeout = {1000}>
        <Grid className={classes.formStyle}>
          <Paper elevation={6} spacing={2} className={classes.paperStyle}>

            <form onSubmit={handleSubmit} noValidate>
            <Typography align="center" variant="subtitle1" style={{color:'white'}} gutterBottom>Contacto</Typography>
            <Box className={classes.iconBox} >
              <ContactMailIcon className={classes.iconStyle} style={{ fontSize: 40 }}/>
            </Box>
            <Grid xs={12}> 
              <TextField id="name" label="Nombre *" 
                variant ="filled" margin="dense" size="small" fullWidth  
                name="name" value={name} onChange={ (e) => handleChange (e,[noBlanks])}
                error={formErrors.name} ></TextField>
                {formErrors.name ? <div className="error-helper-text">{formErrors.name}</div> : null}
            </Grid>
            <Grid xs={12} md={9}> 
              <TextField id="phone" label="Celular (solamente numeros)"
                 variant ="filled" margin="dense" size="small" fullWidth
                 name="phone" value={phone} onChange={(e) => handleChange (e,[isValidPhone])}
                 error={formErrors.phone}></TextField>
                 {formErrors.phone ? <div className="error-helper-text">{formErrors.phone}</div> : null}
            </Grid>  
            <Grid xs={12}>
              <TextField id="email" label="E-mail *" 
                 variant ="filled" margin="dense" size="small" fullWidth 
                 name="email" value={email} onChange={(e) => handleChange (e,[isValidEmail])}
                 error={formErrors.email}></TextField>
                 {formErrors.email ? <div className="error-helper-text">{formErrors.email}</div> : null}
            </Grid>
            <Grid xs={12}>
              <Typography align="left" variant="subtitle1" style={{color:'white'}} gutterBottom>Mensaje *</Typography>
              <div>
              <textarea name="message" placeholder="Escriba su mensaje" rows="4" 
                onChange={(e) => handleChange (e,[noBlanks])}></textarea>
                {formErrors.message ? <div className="error-helper-text">{formErrors.message}</div> : null}
              </div>
            </Grid>
            <Grid container direction="row" alignItems="center" justify="center"> 
              <Button type="submit" className={classes.buttonStyle} variant="outlined" disableRipple >Enviar Mensaje</Button>
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
    </div>
  )
}