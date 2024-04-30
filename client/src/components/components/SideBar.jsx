import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "./SideBar.css";
import imgHome from "../../assets/images/homeMenu.png";
import imgUser from "../../assets/images/userMenu.png";
import imgEvents from "../../assets/images/eventsMenu.png";
import imgBike from "../../assets/images/bikeMenu.png";
import imgUserBlack from "../../assets/images/userMenuBlack.png";
import imgEventsBlack from "../../assets/images/eventsMenuBlack.png";
import imgBikeBlack from "../../assets/images/bikeMenuBlack.png";
import imgTurn from "../../assets/images/turnMenu.png";
import imgSychronization from "../../assets/images/sychronizationMenu.png";
import { Button } from '@mui/material';
import { ButtonsContext } from "../../context/buttonPress.jsx";

function SideBar({home}) {
    //select? 0 home ,1 addUser,2 ,3 addBike
    return (
        <div className="sidebar">
            <div className="sidebar-buttons">
            
                {home===true? homeMenu() : generalMenu()}
            
            </div>
        </div>
    );
}

function homeMenu() {
    return(
        <>
            <Button>
                <img src={imgTurn} alt="" style={{ maxHeight: '50px' }}/>
            </Button>
            <Button>
                <img src={imgSychronization} alt="" style={{ maxHeight: '50px' }}/>
            </Button>
        </>
    )
}


function generalMenu() {
    const {buttonPress, setButtonPress, changeButtonPress} = useContext(ButtonsContext)
    console.log(buttonPress);
    return(
        <>
            <Link to="/home" onClick={() => changeButtonPress(0)} style={{ position: 'relative', display: 'inline-block' }}>
                <img src={imgHome} style={{
                    maxHeight: '50px',
                    opacity: 0.8
                }}/>
            </Link>
            <Link to="/userRegister" onClick={() => changeButtonPress(1)} style={{ position: 'relative', display: 'inline-block' }}>
                {buttonPress==1?
                    <img src={imgUserBlack} style={{
                        maxHeight: '50px',
                        opacity: 0.5
                    }}/>
                    :
                    <img src={imgUser} style={{
                        maxHeight: '50px',
                        opacity: 0.8
                    }}/>
                }
            </Link>
            <Link to="/events" onClick={() => changeButtonPress(2)} style={{ position: 'relative', display: 'inline-block' }}>
                {buttonPress==2?
                    <img src={imgEventsBlack} style={{
                        maxHeight: '50px',
                        opacity: 0.5
                    }}/>
                    :
                    <img src={imgEvents} style={{
                        maxHeight: '50px',
                        opacity: 0.8
                    }}/>
                }
            </Link>
            <Link to="/bikeRegister" onClick={() => changeButtonPress(3)} style={{ position: 'relative', display: 'inline-block' }}>
                {buttonPress==3?
                    <img src={imgBikeBlack} style={{
                        maxHeight: '50px',
                        opacity: 0.5
                    }}/>
                    :
                    <img src={imgBike} style={{
                        maxHeight: '50px',
                        opacity: 0.8
                    }}/>
                }
            </Link>
        </>
    )
}

export {SideBar}