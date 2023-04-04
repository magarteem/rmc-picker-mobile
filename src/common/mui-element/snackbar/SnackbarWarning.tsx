import { Alert, AlertProps } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React, { forwardRef } from "react";

export interface SnackbarWarningType {
 text: string;
 severity: "error" | "info" | "success" | "warning";
 open: boolean;
 setOpen: (set: boolean) => void;
}

export function SnackbarWarning({ text, severity, open, setOpen }: SnackbarWarningType) {
 const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
  if (reason === "clickaway") return;
  setOpen(false);
 };
 return (
  <div>
   <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
   >
    {/*//@ts-ignore*/}
    <SnackbarAlert onClose={handleClose} severity={severity}>
     {text}
    </SnackbarAlert>
   </Snackbar>
  </div>
 );
}

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
 return <Alert elevation={6} ref={ref} {...props} />;
});
