import { useEffect, useState } from "react";

function useGetPrinterDefault(params) {
  const [printerDefault, setPrinterDefault] = useState(false)

  useEffect(()=>{
    const getPrinters = async () => {
      try {
        const printers = await window.electronApi.toMain();
        const userAgent = navigator.userAgent;
       
        for (const printer of printers){
          console.log(printer['isDefault']);
          if (printer['isDefault']) {
    
            //Windows
            if (userAgent.indexOf('Windows') !== -1) {
              if (printer['status']==0) { //No se puede validar el status
                setPrinterDefault(printer['name'])
              }
            }
    
            // Linux
            if (userAgent.indexOf('Linux') !== -1) {
              if (printer['status']==3) {
                return true
              }
            }
            
          }
        }
    
      } catch (error) {
        console.error("Error al obtener impresoras render:", error);
      }
    }

    getPrinters()

    return()=>{}
  },[])

  return printerDefault
}

export {useGetPrinterDefault}

/* export async function getPrinter() {
  try {
    var printers = [];
    printers = await window.electronApi.toMain();
    const userAgent = navigator.userAgent;
   
    for (const printer of printers){
      console.log(printer['isDefault']);
      if (printer['isDefault']) {
        console.log(printer['status']==3);
        console.log(printer['name']);

        //Windows
        if (userAgent.indexOf('Windows') !== -1) {
          if (printer['status']==0) { //No se puede validar el status
            return printer['name']
          }
        }

        // Linux
        if (userAgent.indexOf('Linux') !== -1) {
          if (printer['status']==3) {
            return true
          }
        }
        
      }
    }

    return false;
  } catch (error) {
    console.error("Error al obtener impresoras render:", error);
    return false;
  }
}
   */