import { Outlet, useParams } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import arrow_back from "../assets/icons/arrow_back.svg";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { TabsComponentOtherProfilePosts } from "../common/components/profile/otherUserProfile/TabsComponentOtherProfilePosts";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { useAppDispatch, useAppSelector } from "../core/redux/app/hooks";
import { otherUserDataQuery } from "../modules/user/otherUserDataQuery";
import { getMyProfileQuery } from "../modules/user/getGetMyProfileQuery";

export const OtherUserРosts = () => {
 const { id_user } = useParams();
 const dispatch = useAppDispatch();
 // const activeTypeForm = useAppSelector((state) => state.userSliceReducer.isActiveForms);
 // const parseJson = activeTypeForm && JSON.parse(activeTypeForm).id;

 useLayoutEffect(() => {
  return () => {
   dispatch(otherUserDataQuery.util.resetApiState());
  };
 }, []);

 const adsNews = useAppSelector((state) => state.timeLineSliceReducer.timeLineData);
 const adsData = useAppSelector((state) => state.adsSliceReducer);
 const myProfile = useAppSelector((state) => state.userSliceReducer.profileData);

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     cancelImgIcon={arrow_back}
     // textLabel={`Публикации ${
     //  thisOtherUsetAllProfile?.name.split(" ")[0]
     // }`}
     textLabel="Публикации пользователя"
    />
   </StylesFullScreen>

   <TabsComponentOtherProfilePosts />

   <StylesFullScreen>
    <Outlet context={[adsNews, adsData, myProfile, id_user]} />
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
