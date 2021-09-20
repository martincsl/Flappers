import { createMuiTheme } from '@material-ui/core';

//main: "#1C1C49" "#FF4500"  #F57F17 "#800040" "#ff4500" overrides: {}
const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#730202" //azul oscuro "#1C1C49"     "#344955" "#344955" 
    },
    secondary: {
      main: "#F57F17"    //orangered  "#FF4500"  "#F9AA33"
    }
  },
  overrides:{
    MuiTextField: {
      root:{
        variant:'outlined',
        margin:'dense',
        size:'small'
      }
    },
    MuiInputLabel: {
      root: {
        color: '#808080',
        "&$focused": {
          color: "#1C1C49"
        },
      }
    },   
    MuiFilledInput:{
      root: {
        color: "#1C1C49",
        backgroundColor: "white",
        "&:hover": {
          color:"#1C1C49",
          backgroundColor:"#D3D3D3",
        },
        "&$focused": {
          color:"blue",
          backgroundColor: "white"
        },
      }
      },
    },
});

export default mainTheme;