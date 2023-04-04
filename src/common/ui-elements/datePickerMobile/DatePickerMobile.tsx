import React, { useEffect } from "react";
import ModalDatePicker from "react-mobile-datepicker-ts/dist";
import DatePicker from "react-mobile-datepicker-ts/dist";
import { calculateAge } from "../../../helpers/calculateAge";
import "./datepicker.scss";
import "react-mobile-datepicker-ts/dist/main.css";
import { FieldCustomAge } from "./FieldCustomAge";
import { dateConfig, DateTimeType } from "./dateTime";

export interface DatePickerMobileType {
 placeholder: string;
 onChange: (num: number) => void;
 value: number | null;
}

export const DatePickerMobile = ({ onChange, value }: DatePickerMobileType) => {
 const [time, setTime] = React.useState(new Date());
 const [isOpen, setIsOpen] = React.useState(false);
 const handleToggle = (nextIsOpen: typeof isOpen) => setIsOpen(nextIsOpen);

 useEffect(() => {
  const elem = document.body;
  isOpen && elem.classList.add("cssGlobalHTML");
  //@ts-ignore
  isOpen && elem.parentNode.classList.add("cssGlobalHTML");

  return () => {
   elem.classList.remove("cssGlobalHTML");
   //@ts-ignore
   elem.parentNode.classList.remove("cssGlobalHTML");
  };
 }, [isOpen]);

 const handleSelect = (nextTime: typeof time) => {
  setTime(nextTime);
  setIsOpen(false);
 };

 return (
  <div className="wrappPicker">
   {/*<TextFieldElementMui
    //disabled={ true}
    disabled={isOpen && true}
    inputValue={
     value ? calculateAge(new Date(value).getTime()) : null
    }
    //inputValue={
    // valid !== "0"
    //  ? calculateAge(new Date(time).getTime())
    //  : null
    //}
    onClick={() => handleToggle(true)}
    placeholder={valid === "0" ? "Возраст" : ""}
   />*/}

   {/*<span
    className="fieldCustomAge"
    onClick={() => handleToggle(true)}
   >
    {value ? (
     calculateAge(new Date(value).getTime())
    ) : (
     <span className="customAgePlaceholder">Возраст</span>
    )}
   </span>*/}

   <FieldCustomAge
    placeholder="Возраст"
    value={value ? calculateAge(new Date(value).getTime()) : null}
    onClick={() => handleToggle(true)}
   />

   {/*<DatePicker*/}
   <ModalDatePicker
    max={new Date()}
    showFooter={true}
    cancelText=""
    confirmText="Готово"
    //@ts-ignore
    dateConfig={dateConfig.slice(0, 3)}
    value={time}
    onChange={(date: Date) => onChange(new Date(date).getTime())}
    theme="default"
    isOpen={isOpen}
    onSelect={handleSelect}
    onCancel={() => handleToggle(false)}
   />
  </div>
 );
};

//console.log(dateConfig);
//export interface DatePickerMobileType {
// placeholder: string;
// onChange: (num: number) => void;
// value: any;
//}

//export const DatePickerMobile = ({
// placeholder,
// onChange,
// value,
//}: DatePickerMobileType) => {
// let full = document.querySelector(".datepicker-modal");

// const [time, setTime] = React.useState(new Date());
// const [isOpen, setIsOpen] = React.useState(false);
// const handleToggle = (nextIsOpen: typeof isOpen) => {
//  setIsOpen(nextIsOpen);
// };

// const handleSelect = (nextTime: typeof time) => {
//  setTime(nextTime);
//  setIsOpen(false);
//  full && full.requestFullscreen();
// };
// full && full.requestFullscreen();

// useEffect(() => {
//  full && full.requestFullscreen();
// }, [full]);

// const valid = calculateAge(new Date(time).getTime());
// return (
//  <div>
//   <TextFieldElementMui
//    disabled={isOpen && true}
//    inputValue={
//     valid !== "0"
//      ? calculateAge(new Date(time).getTime())
//      : null
//    }
//    onClick={() => handleToggle(true)}
//    placeholder={valid === "0" ? "Возраст" : ""}
//   />

//   <ModalDatePicker
//    // <DatePicker
//    max={new Date()}
//    showFooter={true}
//    cancelText=""
//    confirmText="Готово"
//    //@ts-ignore
//    dateConfig={dateConfig}
//    value={time}
//    onChange={(date: Date) =>
//     onChange(new Date(date).getTime())
//    }
//    theme="default"
//    isOpen={isOpen}
//    onSelect={handleSelect}
//    onCancel={() => handleToggle(false)}
//   />
//  </div>
// );
//};
