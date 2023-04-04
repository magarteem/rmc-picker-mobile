import {
 MouseEvent,
 TouchEvent,
 useState,
 ReactNode,
} from "react";
import s from "./filterLayoutWrapper.module.scss";

interface FilterLayoutWrapperType {
 handleClose: () => void;
 children: ReactNode;
}

export const FilterLayoutWrapper = ({
 children,
 handleClose,
}: FilterLayoutWrapperType) => {
 const [touchPosition, setTouchPosition] = useState<
  null | number
 >(null);

 const handleTouchStart = (
  e: TouchEvent<HTMLImageElement>
 ) => {
  const touchDown = e.touches[0].clientY;
  setTouchPosition(touchDown);
 };

 const handleTouchMove = (
  e: TouchEvent<HTMLDivElement>
 ) => {
  const touchDown = touchPosition;

  if (touchDown === null) return;

  const currentTouch = e.touches[0].clientX;
  const diff = touchDown - currentTouch;
  //if (diff > 5) {  }

  if (diff < -5) handleClose();
  setTouchPosition(null);
 };

 return (
  <div className={s.filterForAds}>
   <div
    className={s.toutchLine}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onClick={() => handleClose()}
   />

   {children}
  </div>
 );
};
