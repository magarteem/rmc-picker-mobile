import { useRef, useState } from "react";
import Select, {
 components,
 OptionProps,
 MultiValueGenericProps,
} from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import "./customReactSelectTools.scss";
import cn from "classnames";
import { ToolsType } from "../../../../modules/authorization/types/authType";
import { InstrumentGlobalType } from "../../../../types/PROFILE/InstrumentGlobalType";

export const Temp = (data: any) => (
 <FormatGroupLabel data={data} />
);

const CustomMultiValue = (
 props: any,
 showChips: boolean,
 toggleShow: (prev: any) => void
) => {
 const getValueSelected = props.getValue().length;
 const limitedShowChips = 5;
 const onMouseDown = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
 };
 const defaultChips = (
  <components.MultiValue {...props}>
   <img src={props.data.icon} alt={props.data.icon} />
   {props.children}
  </components.MultiValue>
 );
 const innerProps = { ...props.innerProps, onMouseDown };

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
       innerProps={innerProps}
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
   <span onClick={toggleShow} onTouchEnd={toggleShow}>
    <components.MultiValue
     className="moreTools"
     {...props}
     innerProps={innerProps}
    >
     Ещё {getValueSelected - limitedShowChips}
    </components.MultiValue>
   </span>
  );
 } else return null;
};

const CustomMultiValueContainer = (
 props: MultiValueGenericProps<InstrumentGlobalType[]>,
 showChips: boolean,
 toggleShow: (prev: any) => void
) => {
 console.log(props);
 const getValueSelected = props.selectProps.id?.length;
 const limitedShowChips = 5;
 const defaultChips = (
  <components.MultiValueContainer {...props}>
   <img src={props.data.icon} alt={props.data.icon} />
   {props.children}
  </components.MultiValueContainer>
 );

 return (
  <>
   {showChips && defaultChips}
   <span onClick={toggleShow}>sss</span>
  </>
 );
};

//const MultiValueLabel = (
// props: MultiValueGenericProps<InstrumentGlobalType[]>
//) => {
// const Mval = components.MultiValueLabel;
// //let obj = props.selectProps.id;
// //const lastItemObj = obj[obj.length - 1].id;
// //const count = props.data.id;
// console.log(props);
// return (
//  <Mval {...props}>
//   {props.children}
//   {/*<span>{lastItemObj !== count && ","}</span>*/}
//  </Mval>
// );
//};

const Option = (props: OptionProps<ToolsType>) => {
 const [check, setCheck] = useState(props.isSelected);
 const checkCh = () => setCheck((prev) => !prev);
 const Co = components.Option;

 return (
  <Co {...props}>
   <div className="customCheckBoxStyle" onClick={checkCh}>
    <input
     checked={check}
     type="checkbox"
     onChange={() => {}}
    />

    <span className="check"></span>
    <img src={props?.data.icon} alt={props.data.name} />
    <label className="customLabel">{props.data.name}</label>
   </div>
  </Co>
 );
};

const Group = (props: any) => {
 let show = props.selectProps.options[0].name;
 let label = props.data.name;

 return (
  <div
   className={cn({
    ["menuListGroupeOpen"]: show === label,
   })}
  >
   <components.Group {...props} />
  </div>
 );
};

interface CustomReactSelectToolsType {
 placeholder: string;
 value?: any;
 options: InstrumentGlobalType[] | any;
 onChange: () => void;
 errors: any;
 ItemRef: any;
}
export const CustomReactSelectTools = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomReactSelectToolsType) => {
 const customStyles = {
  container: (provided: any) =>
   errors && {
    ...provided,
    border: `1.5px solid #E95050`,
   },
  multiValue: (provided: any) => ({
   ...provided,
   background: "inherit",
   fontWeight: 500,
   fotnSize: "16px",
  }),
 };

 const [showChips, setShowChips] = useState(false);
 const toggleShow = (e: any) => {
  return setShowChips((prev: boolean) => !prev);
 };

 return (
  <div className="wrapperSelect">
   <Select
    className={cn("customs_select_container", {
     styleError: errors,
    })}
    classNamePrefix="customs_select_list_prefix"
    placeholder={placeholder}
    value={value}
    isSearchable={false}
    options={options}
    components={{
     Option,
     MultiValue: (props) =>
      CustomMultiValue(props, showChips, toggleShow),
     Group,
    }}
    isMulti
    styles={customStyles}
    onChange={onChange}
    hideSelectedOptions={false}
    formatGroupLabel={(data) => Temp(data)}
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

//e.preventDefault();
//e.stopPropagation();

//removeProps={{
//  onMouseDown: (e) => {
//   // e.preventDefault();
//   // e.stopPropagation();
//  },
// }}

//{
/*<components.MultiValue
innerProps={{
 ...props.innerProps,
 onClick: (e) => {
  e.stopPropagation();
  e.preventDefault();

  alert(props.data.name);
 },
}}
className="moreTools"
{...props}
>
Ещё {getValueSelected - limitedShowChips}
</components.MultiValue>*/
//}

// //let obj = props.selectProps.id;
// //const lastItemObj = obj[obj.length - 1].id;
// //const count = props.data.id;
// console.log(props);
// return (
//  <Mval {...props}>
//   {props.children}
//   {/*<span>{lastItemObj !== count && ","}</span>*/}
//  </Mval>
