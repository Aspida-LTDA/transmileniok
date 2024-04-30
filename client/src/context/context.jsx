import React, { useState, useEffect, createContext } from 'react';
import { getCamera } from "./getCamera.jsx";
//import { getPrinter } from "./getPrinter.jsx";

const DevicesContext = createContext(null);

const DevicesProvider = ({ children }) => {
  const [devicesAvailable, setDevicesAvailable] = useState(null);
  const [cameraAvailableMessage, setCameraAvailableMessage] = useState(null);
  const [printerAvailableMessage, setPrinterAvailableMessage] = useState(null);

  useEffect(() => {
    Promise.all([
      getCamera().then((isCameraAvailable) => {
        setDevicesAvailable(isCameraAvailable);
        setCameraAvailableMessage(isCameraAvailable ? '¡Cámara disponible!' : 'Cámara no disponible');
      }),
      /* getPrinter().then((isPrinterAvailable) => {
        setDevicesAvailable(devicesAvailable || isPrinterAvailable);
        setPrinterAvailableMessage(isPrinterAvailable ? '¡Impresora disponible!' : 'Impresora no disponible');
      }),  */   
    ])
      .catch((error) => {
        console.error('Error checking devices:', error);
      });
  }, [/* navigator.mediaDevices */]);

  return (
    <DevicesContext.Provider value={{ 
      devicesAvailable, 
      cameraAvailableMessage, 
      printerAvailableMessage
    }}>
      {children}
    </DevicesContext.Provider>
  );
};

export { DevicesContext, DevicesProvider };
