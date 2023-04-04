import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import customData from "./tritoneLoader.json";
import s from "./preloaderStype.module.scss";

export const PreLoader = () => {
 return (
  <div className={s.preloaderStype}>
   <Player
    src={customData}
    loop
    autoplay
    className={s.elementLoader}
   />
  </div>
 );
};
