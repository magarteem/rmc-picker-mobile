import React, { useEffect } from "react";
import ModalDatePicker from "react-mobile-datepicker-ts/dist";
import { calculateAge } from "../../../helpers/calculateAge";
import TextFieldElementMui from "../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import "./datepicker.scss";
import "react-mobile-datepicker-ts/dist/main.css";

const monthMap = {
 "1": "Янв",
 "2": "Фев",
 "3": "Мрт",
 "4": "Апр",
 "5": "Май",
 "6": "Июнь",
 "7": "Июль",
 "8": "Авг",
 "9": "Сен",
 "10": "Ост",
 "11": "Ноя",
 "12": "Дек",
};

const dateConfig = [
 {
  type: "year",
  format: "YYYY",
  caption: "Год",
  step: 1,
 },
 {
  type: "month",
  //@ts-ignore
  format: (value: Date) => monthMap[value.getMonth() + 1],
  caption: "Мес",
  step: 1,
 },
 {
  type: "date",
  format: "DD",
  caption: "День",
  step: 1,
 },
];

function openFullscreen(full: any) {
 if (full) {
  if (full.requestFullscreen) {
   full.requestFullscreen();
  } else if (full.webkitRequestFullscreen) {
   full.webkitRequestFullscreen();
  } else if (full.msRequestFullscreen) {
   full.msRequestFullscreen();
  }
 }
}

export interface DatePickerMobileType {
 placeholder: string;
 onChange: (num: number) => void;
 value: number | null;
}

export const DatePickerMobile = ({
 onChange,
 value,
}: DatePickerMobileType) => {
 let full = document.querySelector(".datepicker-modal");

 const [time, setTime] = React.useState(new Date());
 const [isOpen, setIsOpen] = React.useState(false);
 const handleToggle = (nextIsOpen: typeof isOpen) => {
  console.log("2");
  setIsOpen(nextIsOpen);
 };

 const handleSelect = (nextTime: typeof time) => {
  console.log("1");
  setTime(nextTime);
  setIsOpen(false);
  //full && full.requestFullscreen();
  openFullscreen(full);
 };

 useEffect(() => {
  //full && full.requestFullscreen();
  openFullscreen(full);
 }, [full]);

 const valid = calculateAge(new Date(time).getTime());

 return (
  <div>
   <TextFieldElementMui
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
   />

   <ModalDatePicker
    // <DatePicker
    max={new Date()}
    showFooter={true}
    cancelText=""
    confirmText="Готово"
    //@ts-ignore
    dateConfig={dateConfig}
    value={time}
    onChange={(date: Date) =>
     onChange(new Date(date).getTime())
    }
    theme="default"
    isOpen={isOpen}
    onSelect={handleSelect}
    onCancel={() => handleToggle(false)}
   />
  </div>
 );
};
//import React, { useEffect } from "react";
//import ModalDatePicker from "react-mobile-datepicker-ts/dist";
//import { calculateAge } from "../../../helpers/calculateAge";
//import TextFieldElementMui from "../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
//import "./datepicker.scss";
//import "react-mobile-datepicker-ts/dist/main.css";

//const monthMap = {
// "1": "Янв",
// "2": "Фев",
// "3": "Мрт",
// "4": "Апр",
// "5": "Май",
// "6": "Июнь",
// "7": "Июль",
// "8": "Авг",
// "9": "Сен",
// "10": "Ост",
// "11": "Ноя",
// "12": "Дек",
//};

//const dateConfig = [
// {
//  type: "year",
//  format: "YYYY",
//  caption: "Год",
//  step: 1,
// },
// {
//  type: "month",
//  //@ts-ignore
//  format: (value: Date) => monthMap[value.getMonth() + 1],
//  caption: "Мес",
//  step: 1,
// },
// {
//  type: "date",
//  format: "DD",
//  caption: "День",
//  step: 1,
// },
//];

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
