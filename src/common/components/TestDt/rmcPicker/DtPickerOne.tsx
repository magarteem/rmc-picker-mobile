import { useEffect, useState } from "react";
import MultiPicker from "rmc-picker/lib/MultiPicker";
import Picker from "rmc-picker/lib/Picker";
import TextFieldElementMui from "../../../mui-element/textFieldElementMui/textField/TextFieldElementMui";
import "./styles1.css";
import s from "./dtPickerOne.module.scss";
import { FilterModalLayout } from "../../../layout/filterModalLayout/FilterModalLayout";

let count = 0;
const len = 10;

export const DtPickerOne = () => {
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(["0", "0"]);
 const [item, setItem] = useState<any>();
 const handleClose = () => setOpen(false);
 const changeField = (val: any) => setValue(val);
 const onScrollChange = (val: any) => console.log("onScrollChange", val);
 const handleClickOpen = () => setOpen(true);

 const getItems = (start: number) => {
  const items: any[] = [];
  for (let i = start; i < start + len; i++) {
   items.push(
    <Picker.Item value={i + ""} key={i}>
     {count} {i}
    </Picker.Item>
   );
  }
  setItem(items);
 };

 useEffect(() => {
  getItems(20);
 }, []);
 return (
  <div className="mms">
   <div className={s.fieldPicker}>
    <div onClick={handleClickOpen} className={s.wrapperBlockInput}>
     <TextFieldElementMui
      inputValue={value[0]}
      placeholder="С"
      required={true}
      // onChange={onChange}
      errors={false}
      disabled={true}
     />
    </div>
    <div onClick={handleClickOpen} className={s.wrapperBlockInput}>
     <TextFieldElementMui
      inputValue={value[1]}
      placeholder="До"
      required={true}
      // onChange={onChange}
      errors={false}
      disabled={true}
     />
    </div>
   </div>

   <FilterModalLayout
    style={{
     "& .MuiDialog-container": {
      alignItems: "flex-end",
      overscrollBehavior: "contain",

      "& .MuiPaper-root": {
       background: "#FDFDF5",
       borderRadius: "28px 28px 0px 0px",
       width: "100%",
       margin: 0,
       padding: "16px",
      },
     },
    }}
    modalOpen={open}
    handleClose={handleClose}
   >
    <h5 className={s.reset} onClick={() => setValue(["", ""])}>
     Сбросить
    </h5>
    <MultiPicker selectedValue={value} onValueChange={changeField} onScrollChange={onScrollChange}>
     <Picker indicatorClassName="my-picker-indicator">
      <Picker.Item className="my-picker-view-item" value="1">
       1
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="2">
       2
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="3">
       3
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="4">
       4
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="5">
       5
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="6">
       6
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="7">
       7
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="8">
       8
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="9">
       9
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="10">
       10
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="11">
       11
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="12">
       12
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="13">
       13
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="14">
       14
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="15">
       15
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="16">
       16
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="17">
       17
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="18">
       18
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="19">
       19
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="20">
       20
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="21">
       21
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="22">
       22
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="23">
       23
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="24">
       24
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="25">
       25
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="26">
       26
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="27">
       27
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="28">
       28
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="29">
       29
      </Picker.Item>
     </Picker>

     <Picker indicatorClassName="my-picker-indicator">
      <Picker.Item className="my-picker-view-item" value="1">
       1
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="2">
       2
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="3">
       3
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="4">
       4
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="5">
       5
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="6">
       6
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="7">
       7
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="8">
       8
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="9">
       9
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="10">
       10
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="11">
       11
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="12">
       12
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="13">
       13
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="14">
       14
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="15">
       15
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="16">
       16
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="17">
       17
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="18">
       18
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="19">
       19
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="20">
       20
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="21">
       21
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="22">
       22
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="23">
       23
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="24">
       24
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="25">
       25
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="26">
       26
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="27">
       27
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="28">
       28
      </Picker.Item>
      <Picker.Item className="my-picker-view-item" value="29">
       29
      </Picker.Item>
     </Picker>
    </MultiPicker>
   </FilterModalLayout>
  </div>
 );
};
