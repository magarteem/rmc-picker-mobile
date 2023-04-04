import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"; //getDefaultMiddleware
import authSlice from "../../../modules/authorization/authSlice";
import adsSlice from "../../../modules/ads/adsSlice";
import userSlice from "../../../modules/user/userSlice";
import timeLineSlice from "../../../modules/timeLine/timeLineSlice";
import notificationSlice from "../../../modules/notification/notificationSlice";
import { getCityQuery } from "../../../api/getDataForForm/getCityQuery";
import { getMyProfileQuery } from "../../../modules/user/getGetMyProfileQuery";
import { getNewsListQuery } from "../../../modules/timeLine/getNewsListQuery";
import { adsQuery } from "../../../modules/vacancy/adsQuery";
import { notificationQuery } from "../../../modules/notification/notificationQuery";
import { otherUserDataQuery } from "../../../modules/user/otherUserDataQuery";

export const store = configureStore({
 reducer: {
  authSliceReducer: authSlice,
  timeLineSliceReducer: timeLineSlice,
  userSliceReducer: userSlice,
  adsSliceReducer: adsSlice,
  notificationSliceReducer: notificationSlice,
  [getCityQuery.reducerPath]: getCityQuery.reducer,
  [getMyProfileQuery.reducerPath]: getMyProfileQuery.reducer,
  [getNewsListQuery.reducerPath]: getNewsListQuery.reducer,
  [adsQuery.reducerPath]: adsQuery.reducer,
  [notificationQuery.reducerPath]: notificationQuery.reducer,
  [otherUserDataQuery.reducerPath]: otherUserDataQuery.reducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
   getCityQuery.middleware,
   getMyProfileQuery.middleware,
   getNewsListQuery.middleware,
   adsQuery.middleware,
   notificationQuery.middleware,
   otherUserDataQuery.middleware
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action<string>
>;
