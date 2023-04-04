import React, { useState } from "react";
import TimePicker from "./TimePicker";

export const DtPickerTwo = () => {
 const [timeDisplay, setTimeDisplay] = useState({
  startTime: null,
  endTime: null,
 });
 const [tempTimeDisplay, setTempTimeDisplay] = useState<any>({
  startTime: null,
  endTime: null,
 });
 const [formData, setFormData] = useState({
  startTime: null,
  endTime: null,
 });

 const handleDismiss = (key: any) => {
  setTimeDisplay({ ...timeDisplay, [key]: null });
  setFormData({ ...formData, [key]: null });
 };

 const setTempTimeDisplayData = (key: any, value: any) => {
  setTempTimeDisplay({ ...tempTimeDisplay, [key]: value });
 };

 const setTimeData = (key: any, value: any) => {
  setTimeDisplay({ ...timeDisplay, [key]: tempTimeDisplay[key] });
  setFormData({ ...formData, [key]: value });
 };

 const handleValueChange = (timeProp: any, valueArr: any) => {
  let [hh] = valueArr;
  const [, mm, xm] = valueArr;
  if (hh === "0") hh = "12";
  setTempTimeDisplayData(
   timeProp,
   `${hh.padStart(2, 0)}:${mm.padStart(2, 0)} ${!Number(xm) ? "AM" : "PM"}`
  );
 };

 return (
  <div className="App">
   <h1>Time Tracker</h1>
   <div>
    <TimePicker
     title="Choose Start Time"
     defaultText={timeDisplay.startTime || "Start Time..."}
     defaultDate={formData.startTime}
     setTimeData={setTimeData}
     handleDismiss={handleDismiss}
     timeProp="startTime"
     handleValueChange={handleValueChange}
    />
    <TimePicker
     title="Choose End Time"
     defaultText={timeDisplay.endTime || "End Time..."}
     defaultDate={formData.endTime || formData.startTime} // Stay relative to start time
     setTimeData={setTimeData}
     handleDismiss={handleDismiss}
     timeProp="endTime"
     handleValueChange={handleValueChange}
    />
   </div>
   <div>{JSON.stringify(formData, null, 2)}</div>
  </div>
 );
};
