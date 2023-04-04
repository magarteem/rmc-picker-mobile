import React, { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styleSxTabsComponent } from "./styleSxTabsComponent";
import { RouteNames } from "../../../../core/router/RouteNames";

export const TabsComponentOtherProfilePosts = () => {
 const [value, setValue] = React.useState("");
 let location = useLocation();

 useEffect(() => {
  location.pathname === "/ads/ads-list"
   ? setValue("ads-list")
   : location.pathname === "/ads/questionnaire-list"
   ? setValue("questionnaire-list")
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
    label="Новости"
    sx={styleSxTabsComponent.tab}
    onClick={() => setValue("")}
   />
   <Tab
    to={RouteNames.OTHER_USER_VACANCY}
    value={RouteNames.OTHER_USER_VACANCY}
    component={Link}
    label="Вакансии"
    sx={styleSxTabsComponent.tab}
    onClick={() => setValue(RouteNames.OTHER_USER_VACANCY)}
   />
   <Tab
    to={RouteNames.OTHER_USER_ADS}
    value={RouteNames.OTHER_USER_ADS}
    component={Link}
    label="Объявления"
    sx={styleSxTabsComponent.tab}
    onClick={() => setValue(RouteNames.OTHER_USER_ADS)}
   />
   <Tab
    to={RouteNames.OTHER_USER_QUESTIONNAIRE}
    value={RouteNames.OTHER_USER_QUESTIONNAIRE}
    component={Link}
    label="Анкеты"
    sx={styleSxTabsComponent.tab}
    onClick={() =>
     setValue(RouteNames.OTHER_USER_QUESTIONNAIRE)
    }
   />
  </Tabs>
 );
};
