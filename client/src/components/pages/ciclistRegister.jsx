import React, {useContext, useState} from 'react'
import { Background, DividerCustom, SideBar } from "../components";
import { DevicesContext } from "../../context/context.jsx";
import { Container, Grid, Paper, TextField, IconButton, Typography, Button } from "@mui/material";
import { PhotoCamera, NoPhotography } from "@mui/icons-material";

import { inputProps, inputSx, inputIconCalendarProps, inputIconListBulletProps, iconfullWH } from "../../Styles.jsx";

function UserRegister() {
    const { cameraAvailableMessage } = useContext(DevicesContext);
    const [stream, setStream] = useState(null);
    const videoRef = React.createRef();
    const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      };

    return (
        <Background>
            <SideBar home={false}/>
            <div>
                <DividerCustom title="Datos personales" widthLine={9} widthText={3} />
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3} maxHeight={150}>
                            <Paper style={{ backgroundColor: 'white', height: '100%' }} elevation={3}>
                                {cameraAvailableMessage?
                                    <IconButton
                                        sx={iconfullWH}
                                        onClick={startCamera}
                                    >
                                        <PhotoCamera sx={iconfullWH} />
                                    </IconButton>
                                    : <NoPhotography sx={iconfullWH} />
                                }
                            </Paper>
                            
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        
                        
                            <Typography>Nombres *</Typography>
                            <TextField 
                                fullWidth 
                                variant="outlined" 
                                sx={inputSx}
                                InputProps={inputProps}
                            />
                            <br/>
                            <Typography>Apellidos *</Typography>
                            <TextField fullWidth sx={inputSx} variant="outlined" InputProps={inputProps} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography>Tipo de Documento *</Typography>
                            <TextField fullWidth sx={inputSx} variant="outlined" InputProps={inputIconListBulletProps} />
                            <Typography># de Documento</Typography>
                            <TextField fullWidth sx={inputSx} variant="outlined" InputProps={inputProps} />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Nacimiento *</Typography>
                            <TextField fullWidth sx={inputSx} variant="outlined" InputProps={inputIconCalendarProps} />
                            <Typography>RH *</Typography>
                            <TextField fullWidth sx={inputSx} variant="outlined" InputProps={inputIconListBulletProps} />
                        </Grid>
                    </Grid>
                </Container>
                <DividerCustom title="Datos de contacto" widthLine={9} widthText={3} />
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Typography>Dirección</Typography>
                            <TextField fullWidth sx={inputSx} InputProps={inputProps} variant="outlined" />
                            <Typography>Email</Typography>
                            <TextField fullWidth sx={inputSx} InputProps={inputProps} variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography># Celular</Typography>
                            <TextField fullWidth sx={inputSx} InputProps={inputProps} variant="outlined" />
                            <Typography>Ocupación</Typography>
                            <TextField fullWidth sx={inputSx} InputProps={inputProps} variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Estrato</Typography>
                            <TextField fullWidth sx={inputSx} InputProps={inputIconListBulletProps} variant="outlined" />
                        </Grid>
                    </Grid>
                </Container>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ 
                    mt: 3,
                    borderRadius:'25px', 
                    background:'#2E2E2E', 
                    height:50, 
                    mx:'auto', 
                    display: 'flex', 
                    alignSelf: 'center', 
                    maxWidth: '200px',
                    fontWeight: 'bold',
                    maxHeight: '40px'
                    }}
                >
                    Registrar
                </Button>
            </div>
        </Background>
    )
}

export {UserRegister}