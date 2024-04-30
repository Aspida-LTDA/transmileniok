import React from 'react';
import {DevicesProvider} from "../context/context.jsx";
import { ButtonsProvider } from "../context/buttonPress.jsx";
import { AppRoutes } from '../Routes.jsx';
import "./App.css";

export function AppFolder () {

  return (
    <DevicesProvider>
      <ButtonsProvider>
        <AppRoutes />
      </ButtonsProvider>      
    </DevicesProvider>
  );
};
