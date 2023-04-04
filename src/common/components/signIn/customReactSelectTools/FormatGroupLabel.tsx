import { useRef } from "react";
import arrowSelect from "../../../../assets/icons/arrowSelect.webp";
import { InstrumentGlobalType } from "../../../../types/PROFILE/InstrumentGlobalType";
import s from "./formatGroupLabel.module.scss";

interface FormatGroupLabelType {
 data: InstrumentGlobalType;
}

export const FormatGroupLabel = ({
 data,
}: FormatGroupLabelType) => {
 const ref = useRef<HTMLDivElement | null>(null);

 const showList = () => {
  let parent =
   ref.current?.parentElement?.parentElement?.parentElement;
  parent?.classList.toggle("menuListGroupeOpen");
 };

 return (
  <div
   onClick={showList}
   ref={ref}
   className={s.formatGroupLabel}
  >
   <div className={s.arrowSelectImg}>
    <img src={arrowSelect} alt={arrowSelect} />
   </div>
   <span>{data.name}</span>
  </div>
 );
};
