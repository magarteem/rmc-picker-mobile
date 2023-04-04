import React, { useState } from "react";
import { Picker } from "react-mobile-style-picker";
//import "react-mobile-style-picker/dist/index.css"; // or index.less
import "./numberPickerUiElement.scss";

const getHeight = (num: any) => {
 //@ts-ignore
 const feets = [...Array(num).keys()];
 //@ts-ignore
 const inchs = [...Array(13).keys()];
 return feets
  .map((feet) => {
   return inchs.map((inch) => {
    return feet + "'" + inch;
   });
  })
  .flat();
};

export const NumberPicker = ({
 onChange,
 defaultValue,
}: any) => {
 const [range] = React.useState(getHeight(8));
 const [value, setValue] = React.useState();

 React.useEffect(() => {
  setValue(defaultValue);
 }, [defaultValue]);

 React.useEffect(() => {
  onChange(value);
 }, [value]);

 return (
  <div>
   <Picker
    indicatorClassName="selected__measure"
    size={5}
    mask={false}
    value={value}
    onChange={setValue}
    indicatorStyle={{
     background: "#fff",
     zIndex: "inherit",
     borderRadius: "5px",
    }}
    // itemStyle={{ color: "#fff" }}
   >
    {range.map((i) => (
     <Picker.Item value={i}>{`${i}`}</Picker.Item>
    ))}
   </Picker>
  </div>
 );
};

export default function NumberPickerUiElement(
 setShowDtP: any
) {
 const [value, setValue] = React.useState(0);
 const [val, setVal] = React.useState(0);

 // const height = React.useMemo(() => {
 //  //@ts-ignore
 //  const raw = val?.split?.("'");
 //  if (raw?.length !== 2) return {};
 //  const [height, feet] = raw;
 //  return { height, feet };
 // }, [val]);

 return (
  <div>
   <div className="App">
    <NumberPicker defaultValue={value} onChange={setVal} />
    <button
     style={{ left: 0, position: "absolute" }}
     // onClick={() => {
     //  setValue((value + 1) % 6);
     // }}
     onClick={() => setShowDtP(false)}
    >
     X
    </button>
    {/*{JSON.stringify(height)}*/}
   </div>
  </div>
 );
}
