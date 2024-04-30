import React, {useContext} from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {QRCodeComponent} from '../components/index.js';
import { DevicesContext } from "../../context/context.jsx";
import { Link } from "react-router-dom";
import { useGetPrinterDefault } from "../../context/getPrinter.jsx";

export function UserRegister () {
  const printer = useGetPrinterDefault()
  const { cameraAvailableMessage, printerAvailableMessage } = useContext(DevicesContext);

  const handlePrint = async () => {

    options = {
      preview: false,
      margin: '0 0 0 0',
      copies: 1,
      printerName: printer,
      timeOutPerLine: 400,
    }

    console.log(printer);
    const printContent = renderToStaticMarkup(<QRCodeComponent value="12345678" />);
    const printWindow = window.open('', '_blank', 'height=100,width=100,left=-9999,top=-9999');
    //const printWindow = window
    printWindow.document.write(printContent)
    printWindow.document.close()
    await window.electronApi.print(printContent);
    //printWindow.print();

  };

  return (
    <div>
      <h1>Biciparking</h1>
      {cameraAvailableMessage && <p>{cameraAvailableMessage}</p>}
      {printerAvailableMessage && <p>{printerAvailableMessage}</p>}
      
      <button onClick={handlePrint}>Imprimir QR</button>

      <Link to="/">
        <button>Ir al Login</button>
      </Link>
    </div>
  );
};
