import React from 'react';
import imageBg from "../../assets/images/backgroundBP.png";
import trasmilenioLogo from "../../assets/images/logoTrasmilenio.png";
import aspidaLogo from "../../assets/images/aspidaLogoWhite.png";
import bpLogo from "../../assets/images/bpLogoWhite.png";
import "./Background.css";

export const Background = ({children}) => {  

  const containerStyle = {
    backgroundImage: `url(${imageBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const imageStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '60px',
    height: 'auto',
  };

  const bottomRightImageStyle = {
    position: 'absolute',
    right: '15px',
    width: '100px',
    height: 'auto',
    bottom: '15px',
  };

  const centerTopImageStyle = {
    top: '15px',
    position: 'absolute',
    height: '50px',
    width: 'auto',
    left: '40%',
    transform: 'transform(-60%)',
    objectFit: 'cover'
  }

  return (
    <div style={containerStyle}>
      {children}
      <img src={trasmilenioLogo} alt='trasmi logo' style={imageStyle} />
      <img src={aspidaLogo} alt='trasmi logo' style={bottomRightImageStyle} />
      <img src={bpLogo} alt='trasmi logo' style={centerTopImageStyle} />
    </div>
  );
};