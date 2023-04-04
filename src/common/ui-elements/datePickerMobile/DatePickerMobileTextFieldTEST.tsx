import React, { useEffect } from "react";
import ModalDatePicker from "react-mobile-datepicker-ts/dist";
import { calculateAge } from "../../../helpers/calculateAge";
import TextFieldElementMui from "../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import { mapTypeData } from "./dateTime";
import "./datepicker.scss";
import "react-mobile-datepicker-ts/dist/main.css";
import TextFieldDataPickerMui from "./textFieldDataPicker/TextFieldDataPickerMui";
import dayjs from "dayjs";

export interface DatePickerMobileTextFieldTESTType {
 placeholder: string;
 customHeader?: string;
 onChange: (num: number) => void;
 value: number | null;
 typePicker: "year_one" | "age" | "time" | "date";
 max?: any;
 min?: Date;
 errors?: any;
 InputLabelProps?: {};
}

export const DatePickerMobileTextFieldTEST = ({
 placeholder,
 customHeader,
 onChange,
 value,
 typePicker,
 max,
 min,
 errors,
 InputLabelProps,
}: DatePickerMobileTextFieldTESTType) => {
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

 const valid = calculateAge(new Date(time).getTime());

 return (
  <div className="wrappPicker">
   <TextFieldDataPickerMui
    InputLabelProps={InputLabelProps}
    //disabled={true}
    inputValue={value ? value : null}
    onClick={() => handleToggle(true)}
    placeholder={placeholder}
    errors={errors}
   />

   <ModalDatePicker
    max={max}
    min={min}
    showFooter={true}
    cancelText=""
    confirmText="Готово"
    //@ts-ignore
    dateConfig={mapTypeData(typePicker)}
    value={time}
    onChange={(date: Date) => onChange(new Date(date).getTime())}
    theme="default"
    customHeader={customHeader}
    isOpen={isOpen}
    onSelect={handleSelect}
    onCancel={() => handleToggle(false)}
   />
  </div>
 );
};
