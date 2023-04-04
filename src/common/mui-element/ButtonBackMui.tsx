import { Button } from "@mui/material";
import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonBackMuiType {
 textCancelButton: string;
 cancelClick?: () => void;
}

export const ButtonBackMui = ({
 textCancelButton,
 cancelClick,
 ...props
}: ButtonBackMuiType) => {
 const navigate = useNavigate();
 const returnStepRegister = (
  event: MouseEvent<HTMLButtonElement>
 ) => {
  event.preventDefault();
  navigate(-1);
 };

 return (
  <Button
   variant="outlined"
   onClick={
    !!cancelClick ? cancelClick : returnStepRegister
   }
   sx={{
    color: "#2B6C00",
    border: "1px solid #66784E",
    borderRadius: "100px",
    width: "100%",
    textTransform: "none",

    "&:hover": {
     borderColor: "#3d5b26",
     boxShadow: "none",
    },
   }}
   {...props}
  >
   {textCancelButton}
  </Button>
 );
};
