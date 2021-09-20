import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@material-ui/core';

export default function Carousel (){

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  return(
  <AutoPlaySwipeableViews>
    <Typography align="center" variant="h4" gutterBottom>Lleva tu PYME al mas alto  nivel !</Typography>
    <Typography align="center" variant="h4" gutterBottom>Tu Gerente Financiero...</Typography>
    <Typography align="center" variant="h4" gutterBottom>Con el costo que te conviene !</Typography>
    <Typography align="center" variant="h4" gutterBottom>Proyección de Flujo de Caja</Typography>
    <Typography align="center" variant="h4" gutterBottom>Preparación de documentos para Bancos</Typography>
    <Typography align="center" variant="h4" gutterBottom>Negociación de Préstamos</Typography>
    <Typography align="center" variant="h4" gutterBottom>Presupuesto Anual y revisiones</Typography>  
    <Typography align="center" variant="h4" gutterBottom>Valuación de la Empresa</Typography>
  </AutoPlaySwipeableViews>
  )
}
