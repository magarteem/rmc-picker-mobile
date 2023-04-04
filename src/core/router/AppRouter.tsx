import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FirstToStepsLayout } from "../../common/layout/firstToStepsLayout/FirstToStepsLayout";
import { RouteNames } from "./RouteNames";
import { ThreeStepFormRegister } from "../../modules/authorization/ThreeStepFormRegister";
import { FirstStepFormRegister } from "../../modules/authorization/FirstStepFormRegister";
import { SecondStepFormRegister } from "../../modules/authorization/SecondStepFormRegister";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { MainScreen } from "../../pages/MainScreen";
import { NotFound } from "../../pages/NotFound";
import { Registration } from "../../pages/Registration";
import { useAppSelector } from "../redux/app/hooks";
import { ProtectedRoute } from "./ProtectedRoutes";
import { RecoveryPassword } from "../../pages/RecoveryPassword";
import { RecoveryPasswordFirstSteps } from "../../common/components/signIn/recoveryPassword/RecoveryPasswordFirstSteps";
import { RecoveryPasswordSecondSteps } from "../../common/components/signIn/recoveryPassword/RecoveryPasswordSecondSteps";
import { WelcomeWindow } from "../../pages/WelcomeWindow";
import { OtherUserProfile } from "../../pages/OtherUserProfile";
import { ProfileInfo } from "../../pages/ProfileInfo";
import { Settings } from "../../pages/Settings";
import { User } from "../../pages/User";
import { ChangeProfile } from "../../pages/ChangeProfile";
import { NewsPagesOne } from "../../pages/NewsPagesOne";
import { NewsAll } from "../../pages/NewsAll";
import { CreateNewAds } from "../../pages/CreateNewAds";
import { Ads } from "../../pages/Ads";
import { AdsAll } from "../../pages/AdsAll";
import { Notification } from "../../pages/Notification";
import { IncomingNotification } from "../../common/components/notification/incomingNotification/IncomingNotification";
import { OutgoingNotification } from "../../common/components/notification/outgoingNotification/OutgoingNotification";
import { OutgoingNotificationPageOne } from "../../pages/OutgoingNotificationPageOne";
import { NotificationSwitchTabs } from "../../common/components/notification/NotificationSwitchTabs";
import { VacancyTabs } from "../../common/components/ads/tabsComponentAds/vacancyTabs/VacancyTabs";
import { AdsTabs } from "../../common/components/ads/tabsComponentAds/adsTabs/AdsTabs";
import { QuestionnaireTabs } from "../../common/components/ads/tabsComponentAds/questionnaireTabs/QuestionnaireTabs";
import { News } from "../../pages/News";
import { AddNewNews } from "../../pages/AddNewNews";
import { ChangeThisNews } from "../../pages/ChangeThisNews";
import { OtherUserРosts } from "../../pages/OtherUserРosts";
import { OtherUserVacancyTabs } from "../../common/components/profile/otherUserProfile/otherUserVacancyTabs/OtherUserVacancyTabs";
import { OtherUserNewsTabs } from "../../common/components/profile/otherUserProfile/otherUserNewsTabs/OtherUserNewsTabs";
import { OtherUserAdsTabs } from "../../common/components/profile/otherUserProfile/otherUserAdsTabs/OtherUserAdsTabs";
import { ChangeThisAds } from "../../pages/ChangeThisAds";
import { AddNewAccount } from "../../pages/AddNewAccount";
import { AddTypeAccountStepSelect } from "../../modules/user/AddTypeAccountStepSelect";
import { AddTypeAccountStepUpdateData } from "../../modules/user/AddTypeAccountStepUpdateData";
import { AdsPageOneAnnouncement } from "../../pages/AdsPageOneAnnouncement";
import { AdsPageOneVacancy } from "../../pages/AdsPageOneVacancy";
import { OtherUserQuestionnaireTabs } from "../../common/components/profile/otherUserProfile/otherUserQuestionnaireTabs/OtherUserQuestionnaireTabs";
import { DtOne } from "../../common/components/TestDt/rmcPicker/DtOne";

//const Ads = React.lazy(() =>
// import(
//  /* webpackChunkName:"Ads" */ "../../pages/Ads"
// ).then((module) => ({
//  default: module.Ads,
// }))
//);
// const User = React.lazy(() =>
//   import(/* webpackChunkName:"User" */ "../../pages/User").then((module) => ({
//     default: module.User,
//   }))
// );
// const Settings = React.lazy(() =>
//   import(
//     /* webpackChunkName:"Settings" */ "../../common/components/settings/Settings"
//   ).then((module) => ({ default: module.Settings }))
// );

//const Notification = React.lazy(() =>
// import(
//  /* webpackChunkName:"Notification" */ "../../pages/Notification"
// ).then((module) => ({ default: module.Notification }))
//);
// const Registration = React.lazy(() =>
//   import(/* webpackChunkName:"Registration" */ "../../pages/Registration").then(
//     (module) => ({ default: module.Registration })
//   )
// );

export const AppRouter = () => {
 const auth = useAppSelector((state) => state.authSliceReducer.isAuth);
 const [preloaderPages, setPreloaderPages] = useState(false);

 const setPreloaderPagesFu = () => setPreloaderPages((prev) => !prev);

 return (
  <Routes>
   <Route element={<ProtectedRoute auth={auth} />}>
    <Route path={RouteNames.HOME} element={<MainScreen />}>
     <Route path="news" element={<Home />}>
      <Route element={<News />}>
       <Route index element={<NewsAll />} />
       {/*<Route index element={<NewsAllApi />} />*/}
       <Route path={RouteNames.ADD_NEW_NEWS} element={<AddNewNews />} />
       {/*<Route path={`${RouteNames.CHANGE_THIS_NEWS}/:change_id_news`} element={<ChangeThisNews />} />*/}
       <Route path={`${RouteNames.NEWS}/:id_news`} element={<NewsPagesOne />} />
      </Route>
     </Route>

     <Route path={RouteNames.ADS} element={<Ads />}>
      <Route element={<AdsAll />}>
       <Route index element={<VacancyTabs />} />
       <Route path={RouteNames.ADS_LIST} element={<AdsTabs />} />
       <Route path={RouteNames.ADS_QUESTIONNAIRE_LIST} element={<QuestionnaireTabs />} />
      </Route>
      {/*<Route path={`${RouteNames.ADS}/:id_ads`} element={<AdsPageOne />} />*/}
      <Route path={`${RouteNames.ADS}/:id_ads`} element={<AdsPageOneVacancy />} />
      <Route
       path={`${RouteNames.ADS}/${RouteNames.ADS_LIST}/:id_ads`}
       element={<AdsPageOneAnnouncement />}
      />
      <Route
       path={`${RouteNames.ADS_CHANGE_THIS_ADS}/:change_id_ads`}
       element={<ChangeThisAds />}
      />
     </Route>

     <Route path={RouteNames.CREATE_ADS} element={<CreateNewAds />} />

     <Route element={<User />}>
      <Route index element={<ProfileInfo />} />

      <Route path={RouteNames.CHANGE_PROFILE} element={<ChangeProfile />} />

      <Route path={RouteNames.ADD_NEW_ACCOUNT} element={<AddNewAccount />}>
       <Route element={<FirstToStepsLayout />}>
        <Route index element={<AddTypeAccountStepSelect />} />
       </Route>
       <Route path={RouteNames.REG_CREATE_ACCOUNT} element={<AddTypeAccountStepUpdateData />} />
      </Route>

      <Route path={RouteNames.SETTINGS} element={<Settings />} />
      <Route path="dt-1" element={<DtOne />} />
     </Route>

     <Route path={RouteNames.NOTIFICATION} element={<Notification />}>
      <Route element={<NotificationSwitchTabs />}>
       <Route index element={<OutgoingNotification />} />
       <Route path={RouteNames.IN_COMING_NOTIFICATION} element={<IncomingNotification />} />
      </Route>
      <Route
       path={`${RouteNames.ONE_VACANCY}/:id_inComingNotification`}
       element={<OutgoingNotificationPageOne />}
      />
      <Route
       path={`${RouteNames.ONE_ANNOUNCEMENT}/:id_inComingNotification`}
       element={<OutgoingNotificationPageOne />}
      />
     </Route>

     <Route path={`${RouteNames.MY_PUBLICATIONS}/:my_id`} element={<OtherUserProfile />} />
     <Route path={`${RouteNames.OTHER_PROFILE_USER}/:id_user`} element={<OtherUserProfile />} />
     <Route
      path={`${RouteNames.OTHER_PROFILE_USER}/:id_user/${RouteNames.OTHER_USER_POSTS}`}
      element={<OtherUserРosts />}
     >
      <Route index element={<OtherUserNewsTabs />} />
      <Route path={RouteNames.OTHER_USER_VACANCY} element={<OtherUserVacancyTabs />} />
      <Route path={RouteNames.OTHER_USER_ADS} element={<OtherUserAdsTabs />} />
      <Route path={RouteNames.OTHER_USER_QUESTIONNAIRE} element={<OtherUserQuestionnaireTabs />} />
     </Route>
    </Route>
   </Route>

   {auth ? (
    <Route>
     <Route path={RouteNames.LOGIN} element={<Navigate to={RouteNames.HOME} replace />} />
     <Route path={RouteNames.REGISTER} element={<Navigate to={RouteNames.HOME} replace />} />
     <Route
      path={`${RouteNames.REGISTER}/${RouteNames.REG_TYPE_ACCOUNT}`}
      element={<Navigate to={RouteNames.HOME} replace />}
     />
     <Route
      path={`${RouteNames.REGISTER}/${RouteNames.REG_CREATE_ACCOUNT}`}
      element={<Navigate to={RouteNames.HOME} replace />}
     />
    </Route>
   ) : (
    <Route>
     <Route path={RouteNames.REGISTER} element={<Registration />}>
      <Route element={<FirstToStepsLayout />}>
       <Route index element={<FirstStepFormRegister />} />
       <Route path={RouteNames.REG_TYPE_ACCOUNT} element={<SecondStepFormRegister />} />
      </Route>
      <Route path={RouteNames.REG_CREATE_ACCOUNT} element={<ThreeStepFormRegister />} />
     </Route>

     <Route
      path={RouteNames.LOGIN}
      element={
       preloaderPages ? <Login /> : <WelcomeWindow setPreloaderPagesFu={setPreloaderPagesFu} />
      }
     />

     <Route path={RouteNames.RECOVERY_PASSWORD} element={<RecoveryPassword />}>
      <Route index element={<RecoveryPasswordFirstSteps />} />
      <Route path={RouteNames.RECOVERY_CREATE_PASSWORD} element={<RecoveryPasswordSecondSteps />} />
     </Route>
    </Route>
   )}

   <Route path="*" element={<NotFound />} />
  </Routes>
 );
};
