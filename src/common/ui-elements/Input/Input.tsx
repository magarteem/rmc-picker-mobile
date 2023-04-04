import { ChangeEvent, ReactNode } from "react";
import cn from "classnames";
import s from "./input.module.scss";

interface InputTypeNew {
 type?: string;
 errors?: any;
 errorBackgroundOrange?: any;
 inputValue?: string;
 children?: ReactNode;
 placeholder: string;
 onChange: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}
export const Input = ({
 children,
 type = "text",
 errors,
 errorBackgroundOrange,
 inputValue,
 placeholder,
 ItemRef,
 onChange,
 onClick,
 ...props
}: InputTypeNew) => {
 return (
  <div className={s.wrapperInput}>
   <input
    className={cn({
     [s.error]: errors,
     [s.errorBackgroundOrange]: errorBackgroundOrange,
    })}
    autoComplete="off"
    type={type}
    value={inputValue}
    placeholder={placeholder}
    onChange={onChange}
    onClick={onClick}
    ref={ItemRef}
    {...props}
   />
   {children}
   {errors && (
    <span
     className={cn({
      [s.errorBackgroundOrange]: errorBackgroundOrange,
     })}
    >
     {errors}
    </span>
   )}
  </div>
 );
};
