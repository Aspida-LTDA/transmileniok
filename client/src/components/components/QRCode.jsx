import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { renderToStaticMarkup } from 'react-dom/server';

export function QRCodeComponent({ value }) {

  const qrCodeHTML = renderToStaticMarkup(<QRCodeSVG value={value} size={60} />);

  const content = `
    <html>
      <head>
        <style>
          @media print {
            @page {
              size: 4cm 10cm; // Tamaño de la etiqueta
              margin: 0; //Sin Mrgenes
            }
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }
            .rotate90 {
              transform: rotate(90deg);
              transform-origin: 50% 50%;
            }
          }
        </style>
      </head>
      <body>
        <Center>
          <div class="rotate90">
            ${qrCodeHTML}
            <p>Cedula: 11111</p>
          </div>
        </Center>
      </body>
    </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};
