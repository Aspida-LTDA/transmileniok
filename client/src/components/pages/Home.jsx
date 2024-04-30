import React, {useContext}  from 'react';
import { Background, SideBar } from "../components";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import imgUserRegister from "../../assets/images/userRegister.png";
import imgEvents from "../../assets/images/events.png";
import imgBikes from "../../assets/images/bikes.png";
import { ButtonsContext } from "../../context/buttonPress.jsx";

function Home() {

  //const { buttonPress,  setButtonPress, changeButtonPress } = useContext(ButtonsContext)

  const LinkSx = {
    border: 0
  }

  const imageStyle = {
    maxHeight: 150,
    margin:10
  }

  return (
    <Background>
      <SideBar home={true} />
        <ButtonGroup>

            <img src={imgUserRegister} style={imageStyle} />
            <img src={imgEvents} style={imageStyle} />
            <img src={imgBikes} style={imageStyle} />
          
        </ButtonGroup>
    </Background>
  );
}

export {Home}
