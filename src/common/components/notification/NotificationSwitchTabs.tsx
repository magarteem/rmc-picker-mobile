import React, { useState, useEffect, useLayoutEffect } from "react";
import filterIcons from "../../../assets/icons/filterIcons.svg";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import { Outlet, useLocation } from "react-router-dom";
import { TabsComponent } from "./tabsComponent/TabsComponent";
import { HeaderStylesWrapper } from "../../layout/headerStylesWrapper/HeaderStylesWrapper";
import { RibbonLayout } from "../../layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../../layout/stylesFullScreen/StylesFullScreen";
import {
 notificationQuery,
 useListIncomingQuery,
 useListOutgoingQuery,
} from "../../../modules/notification/notificationQuery";
import { RouteNames } from "../../../core/router/RouteNames";
import { PreLoader } from "../preLoader/PreLoader";
import { useAppDispatch } from "../../../core/redux/app/hooks";

const filter = { img: filterIcons, action: "" };
const search = { img: searchIcon, action: "" };

export const NotificationSwitchTabs = () => {
 const dispatch = useAppDispatch();
 let location = useLocation().pathname;

 const [outgoingPage, setOutgoingPage] = useState(0);
 const [incomingPage, setIncoming] = useState(0);

 useLayoutEffect(() => {
  dispatch(notificationQuery.util.resetApiState());
 }, []);

 const {
  data: dataOutgoing,
  isLoading: isLoadingOutgoing,
  isFetching: isFetchingOutgoing,
 } = useListOutgoingQuery(outgoingPage, {
  skip: location !== `${RouteNames.NOTIFICATION}`,
 });

 const {
  data: dataIncoming,
  isLoading: isLoadingIncoming,
  isFetching: isFetchingIncoming,
 } = useListIncomingQuery(incomingPage, {
  skip: location !== `${RouteNames.NOTIFICATION}/${RouteNames.IN_COMING_NOTIFICATION}`,
 });

 const setPageFu = () => {
  if (
   location === `${RouteNames.NOTIFICATION}` &&
   dataOutgoing &&
   dataOutgoing?.pageCount > dataOutgoing?.currentPage
  )
   dataOutgoing && setOutgoingPage(dataOutgoing?.currentPage + 1);
  else if (
   location === `${RouteNames.NOTIFICATION}/${RouteNames.IN_COMING_NOTIFICATION}` &&
   dataIncoming &&
   dataIncoming?.pageCount > dataIncoming?.currentPage
  ) {
   dataIncoming && setIncoming(dataIncoming?.currentPage + 1);
  } else {
   console.log();
  }
 };

 return (
  <>
   <StylesFullScreen>
    {/*<HeaderStylesWrapper textLabel="Запросы" anyIconsFirst={search} anyIconsSecond={filter} />*/}
    <HeaderStylesWrapper textLabel="Запросы" />
   </StylesFullScreen>
   <TabsComponent />
   <StylesFullScreen>
    {isLoadingOutgoing || isLoadingIncoming ? (
     <PreLoader />
    ) : (
     <RibbonLayout setPageFu={setPageFu} isFetching={isFetchingOutgoing || isFetchingIncoming}>
      <Outlet context={[dataOutgoing, isLoadingOutgoing, dataIncoming, isLoadingIncoming]} />
     </RibbonLayout>
    )}
   </StylesFullScreen>
  </>
 );
};
