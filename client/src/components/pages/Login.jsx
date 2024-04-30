import { useState } from 'react';
import { 
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Typography
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from "../../assets/images/loginImage.png";
import imageTransmilenio from "../../assets/images/logoTrasmilenio.png";
import imageAspida from "../../assets/images/aspidaLogo.png";
//import { BrowserRouter as Router } from 'react-router-dom';
import logo from "../../assets/images/logo.jpg"


//const defaultTheme = createTheme();

const myCustomColor = {
  main: '#000',
};

const theme = createTheme({
  palette: {
    primary: myCustomColor,
  },
});

export const Login = () => {
  
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario, contrasena, "++++")
    try {
      const response = await fetch('http://localhost:3000/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
      });
      //Validación de Estado de autenticación
      if (response.ok) {
        setIsLoggedIn(true);
        console.log('Inicio de sesión exitoso');
        window.location.href = 'Home'
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid 
          item 
          xs={10} 
          sm={6} 
          md={5} 
          elevation={6} 
          style={{ padding: 20 }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90%',
              gap: '40px'
            }}
          >
            
            <img src={logo} style={{maxWidth: '250px'}}/>
            
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                style={{
                  marginBottom: 20,
                  borderRadius: '25px'//?
                }}
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Usuario"
                name="usuario"
                value={usuario}
                autoComplete="email"
                onChange={(e) => setUsuario(e.target.value)}
                autoFocus
                color='warning'
                className='input'
                focused
                InputLabelProps={{
                  color: "primary",
                }}
                InputProps={{
                  sx: { borderRadius: '35px' }
                }}
                sx={{
                  borderBottomRightRadius: '60px'//?
                }}    
              />
              <TextField
                className='test'
                margin="normal"
                required
                fullWidth
                name="contrasena"
                value={contrasena}
                label="Contraseña"
                type="password"
                id="contrasena"
                onChange={(e) => setContrasena(e.target.value)}
                autoComplete="current-password"
                color='warning'
                focused
                InputProps={{
                  sx: { borderRadius: '35px' }
                }}
                InputLabelProps={{
                  color: "primary",
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ 
                  mt: 3,
                  borderRadius:'25px', 
                  background:'#FF0000', 
                  height:50, 
                  mx:'auto', 
                  display: 'flex', 
                  alignSelf: 'center', 
                  maxWidth: '280px' 
                }}
              >
                Ingresar
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={6}
          md={7}
        >
          <Grid container 
            sx={{
              gridTemplateAreas: `"header content footer"`,
              gridTemplateColumns: `1fr`,
              gridTemplateRows: `1fr`,
              justifyContent: 'end',
              height: '100%',
            }}
          >
            <Grid item sx={{gridArea: 'header', display: 'flex', marginRight: 3 }}>
              <img src={imageTransmilenio} alt="Primera imagen" style={{ maxWidth: '70px', maxHeight: '60px' }} />
            </Grid>
            <Grid item sx={{ gridArea: 'content', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight:5 }}>
              <img src={image} alt="Segunda imagen" style={{ maxWidth: '100%', maxHeight: '90%' }} />
            </Grid>
            <Grid item sx={{ gridArea: 'footer', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
              <img src={imageAspida} alt="Tercera imagen" style={{maxWidth: '100px', maxHeight: '60px', marginRight: 20}} />
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}