import React, { useEffect } from "react";
import ModalDatePicker from "react-mobile-datepicker-ts/dist";
import TextFieldElementMui from "../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import "./datepicker.scss";
import cn from "classnames";
import "react-mobile-datepicker-ts/dist/main.css";
import { FieldCustomAge } from "./FieldCustomAge";
import { dateConfig } from "./dateTime";
import dayjs from "dayjs";

export interface TimePickerMobileType {
 placeholder: string;
 onChange: (num: number) => void;
 value: string | null;
 watch?: any;
 error?: any;
}

export const TimePickerMobile = ({
 onChange,
 value,
 placeholder,
 watch,
 error,
}: TimePickerMobileType) => {
 const [time, setTime] = React.useState(new Date());
 const [isOpen, setIsOpen] = React.useState(false);
 const handleToggle = (nextIsOpen: typeof isOpen) => setIsOpen(nextIsOpen);
 console.log("error", error);
 // const t = new Date();
 // value &&
 //  t.setHours(+value.slice(0, 2), +value.slice(3, 5));
 // console.log("----");

 // value && console.log(+value.slice(0, 2));
 // value && console.log(+value.slice(3, 5));
 // console.log(t);
 // console.log(value);
 // console.log("=== value", dayjs(value));

 // useEffect(() => {
 //  const t = new Date();
 //  //value &&
 //  // t.setHours(+value.slice(0, 2), +value.slice(3, 5));
 //  console.log(t);
 //  console.log(time);
 //  setTime(t);
 // }, []);

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
  console.log("nextTime", nextTime);
  setTime(nextTime);
  setIsOpen(false);
 };

 return (
  <div className={cn("wrappPicker", { error: error })}>
   <FieldCustomAge
    placeholder={placeholder}
    value={value ? `${dayjs(value).format("HH : mm")}` : null}
    onClick={() => handleToggle(true)}
   />

   <ModalDatePicker
    //max={new Date()}
    //min={new Date(watch)}
    showFooter={true}
    cancelText=""
    confirmText="Готово"
    //@ts-ignore
    dateConfig={dateConfig.slice(3, 5)}
    value={time}
    onChange={(date: Date) => {
     console.log(date);
     return onChange(new Date(date).getTime());
    }}
    theme="default"
    isOpen={isOpen}
    onSelect={handleSelect}
    onCancel={() => handleToggle(false)}
   />
  </div>
 );
};
