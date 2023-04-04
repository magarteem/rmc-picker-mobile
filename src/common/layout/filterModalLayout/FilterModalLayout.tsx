import React, { ReactNode } from "react";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import "./cssGlobalHTML.scss";

const Transition = React.forwardRef(function Transition(
 props: TransitionProps & {
  children: React.ReactElement<any, any>;
 },
 ref: React.Ref<unknown>
) {
 return <Slide direction="up" ref={ref} {...props} />;
});

interface FilterModalLayoutType {
 children: ReactNode;
 modalOpen: boolean;
 handleClose: () => void;
 style: {};
}

export const FilterModalLayout = ({
 children,
 modalOpen,
 handleClose,
 style,
}: FilterModalLayoutType) => {
 return (
  <Dialog
   open={modalOpen}
   TransitionComponent={Transition}
   keepMounted
   onClose={handleClose}
   aria-describedby="alert-dialog-slide-description"
   sx={style}
   style={{
    overscrollBehavior: "contain !important",
   }}
   onTouchMove={(e) => {
    e.stopPropagation();
    e.preventDefault();
    e.isPropagationStopped();
   }}
  >
   {children}
  </Dialog>
 );
};
