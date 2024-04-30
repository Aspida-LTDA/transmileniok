import { CalendarMonth, FormatListBulleted, Search } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
import React from "react";
//Inputs Styles

export const inputSx = {
    backgroundColor:'white', 
    borderRadius: '30px',
    height: '35px'
}

export const inputProps = {
    sx:{
        borderRadius: '30px',
        height: '35px'
    }
}

export const inputIconCalendarProps = {
    ...inputProps,
    endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <CalendarMonth />
          </IconButton>
        </InputAdornment>
    ),
}

export const inputIconListBulletProps = {
    ...inputProps,
    endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <FormatListBulleted />
          </IconButton>
        </InputAdornment>
    ),
}

export const inputIconSearchProps = {
  ...inputProps,
  endAdornment: (
      <InputAdornment position="end">
        <IconButton>
          <Search />
        </IconButton>
      </InputAdornment>
  ),
}

export const iconfullWH = {
  color: 'black',
  width: '100%',
  height: '100%',
}

export const blackButton = {
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
}
