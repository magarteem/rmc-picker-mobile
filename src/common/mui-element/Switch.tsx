import { Switch } from "@mui/material";
import React from "react";

export const SwitchMui = () => {
 return (
  <Switch
   defaultChecked
   sx={{
    borderRadius: "100px",
    padding: "0  !important",
    height: "32px !important",
    width: "52px !important",

    "& .MuiButtonBase-root": {
     padding: "8px",
    },

    "& .MuiSwitch-thumb": {
     backgroundColor: "   #74796D !important",
     height: "16px",
     width: "16px",
    },
    "& .MuiButtonBase-root.Mui-checked": {
     "& .MuiSwitch-thumb": {
      backgroundColor: " #ABF684 !important",
     },
    },

    "& .MuiSwitch-track": {
     borderRadius: "100px",
     border: " 2px solid #74796D",
     height: "32px !important",
     width: "52px !important",
     backgroundColor: " #E0E4D7 !important",
     opacity: 1,
    },
    "& .MuiButtonBase-root.Mui-checked + .MuiSwitch-track":
     {
      border: " 2px solid #2A6C04",
      opacity: 1,
      backgroundColor: " #2A6C04 !important",
     },
   }}
  />
 );
};
