import { useState } from "react";
import Select, {
 components,
 MultiValueGenericProps,
 OptionProps,
 StylesConfig,
} from "react-select";
import "./customReactSelectGenre.scss";
import cn from "classnames";
import { GenreType } from "../../../../modules/authorization/types/authType";
import { hexToRGB } from "../../../../modules/authorization/helpers/convertHexToRgb";
import { InterfaceGlobalSelectType } from "../../../../types/interfaseGlobal/interfaseGlobalSelect";

//const MultiValueLabel = (props: MultiValueGenericProps) => {
// const Mval = components.MultiValueLabel;
// let obj = props.selectProps.value;
// //@ts-ignore
// const lastItemObj = obj[obj.length - 1].value;
// const count = props.data.value;

// return (
//  <Mval {...props}>
//   {props.children}
//   <span>{lastItemObj !== count && ","}</span>
//  </Mval>
// );
//};

const CustomMultiValue = (
 props: any,
 showChips: boolean,
 toggleShow: (prev: any) => void
) => {
 const getValueSelected = props.getValue().length;
 const limitedShowChips = 5;
 const defaultChips = (
  <components.MultiValue {...props}>
   <img
    src={props.data.imgIcons}
    alt={props.data.imgIcons}
   />
   {props.children}
  </components.MultiValue>
 );

 if (showChips && getValueSelected < limitedShowChips + 1)
  return defaultChips;
 else if (showChips) {
  if (getValueSelected !== props.index + 1)
   return defaultChips;
  else {
   return (
    <>
     {defaultChips}
     <span onClick={toggleShow} onTouchEnd={toggleShow}>
      <components.MultiValue
       className="moreTools"
       {...props}
      >
       Скрыть
      </components.MultiValue>
     </span>
    </>
   );
  }
 }

 if (props.index < limitedShowChips) return defaultChips;
 else if (props.index === limitedShowChips) {
  return (
   <span
    className="moreTools"
    onClick={toggleShow}
    onTouchEnd={toggleShow}
   >
    <components.MultiValue className="moreTools" {...props}>
     Ещё {getValueSelected - limitedShowChips}
    </components.MultiValue>
   </span>
  );
 } else return null;
};

const Option = (props: OptionProps) => {
 const [check, setCheck] = useState(props.isSelected);
 const checkCh = () => setCheck((prev) => !prev);

 const Co = components.Option;
 return (
  <Co {...props}>
   <div
    className="customCheckBoxStyleGenre"
    onClick={checkCh}
   >
    <input
     checked={check}
     type="checkbox"
     onChange={() => {}}
    />
    <span className="check"></span>
    <label className="customLabel">{props.label}</label>
   </div>
  </Co>
 );
};

interface CustomReactSelectGenreType {
 value?: any;
 placeholder: string;
 options: InterfaceGlobalSelectType[];
 onChange: (data: string) => void;
 errors: any;
 ItemRef: any;
}
export const CustomReactSelectGenre = ({
 value,
 placeholder,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomReactSelectGenreType) => {
 const customStyles: StylesConfig<GenreType, true> = {
  container: (provided) =>
   errors && {
    ...provided,
    border: `1.5px solid #E95050`,
   },
  multiValue: (
   provided,
   { data, isDisabled, isFocused }
  ) => ({
   ...provided,
   background: "inherit",
   fontWeight: 500,
   backgroundColor: `${hexToRGB(
    data.color,
    "100%"
   )} !important`,
   borderRadius: "30px",
  }),
  multiValueLabel: (
   provided,
   { data, isDisabled, isFocused }
  ) => {
   return {
    ...provided,
    color: "white",
   };
  },
 };

 const [showChips, setShowChips] = useState(false);
 const toggleShow = (e: any) =>
  setShowChips((prev: boolean) => !prev);

 return (
  <div className="wrapperSelect">
   <Select
    className={cn("customs_select_container_genre", {
     styleError: errors,
    })}
    classNamePrefix="customs_select_list_prefix_genre"
    placeholder={placeholder}
    //isSearchable={false}
    options={options}
    value={value}
    components={{
     // Option,
     MultiValue: (props) =>
      CustomMultiValue(props, showChips, toggleShow),
    }}
    isMulti
    styles={customStyles}
    onChange={(e: any) => onChange(e)}
    hideSelectedOptions={false}
    closeMenuOnSelect={false}
    blurInputOnSelect={false}
    isClearable={false}
    theme={(theme) => ({
     ...theme,
     colors: {
      ...theme.colors,
      primary25: "#ffffff",
      primary: "#47c7a921",
     },
    })}
    //menuIsOpen
    ref={ItemRef}
    {...props}
   />
   {errors && (
    <span className="error">{errors.message}</span>
   )}
  </div>
 );
};
