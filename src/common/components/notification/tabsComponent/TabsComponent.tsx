import React, { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styleSxTabsComponent } from "./styleSxTabsComponent";
import { RouteNames } from "../../../../core/router/RouteNames";

export const TabsComponent = () => {
 const [value, setValue] = React.useState("");
 let location = useLocation();

 useEffect(() => {
  location.pathname === "/notification/incoming"
   ? setValue("incoming")
   : setValue("");
 }, []);

 const handleChange = (
  event: React.SyntheticEvent,
  newValue: string
 ) => {
  setValue(newValue);
 };

 return (
  <Tabs
   value={value}
   onChange={handleChange}
   textColor="primary"
   indicatorColor="secondary"
   aria-label="secondary tabs example"
   sx={styleSxTabsComponent.tabs}
  >
   <Tab
    to=""
    value=""
    component={Link}
    label="Отправленные"
    sx={styleSxTabsComponent.tab}
    onClick={() => setValue("")}
   />
   <Tab
    to={RouteNames.IN_COMING_NOTIFICATION}
    //to="incoming"
    value={RouteNames.IN_COMING_NOTIFICATION}
    component={Link}
    label="Входящие"
    sx={styleSxTabsComponent.tab}
    onClick={() =>
     setValue(RouteNames.IN_COMING_NOTIFICATION)
    }
   />
  </Tabs>
 );
};
