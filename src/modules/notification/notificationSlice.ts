import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import {
 InitialStateAdsType,
 TimelineCards,
} from "../ads/types/adsSliceType";
import { getDataNotificationThunk } from "./getDataNotificationThunk";
import { setDataNotificationThunk } from "./setDataNotificationThunk";
import { updateDataNotificationThunk } from "./updateDataNotificationThunk";

const initialState: InitialStateAdsType = {
 adsList: [],
 isLoading: false,
 error: null,
};

const notificationSlice = createSlice({
 name: "adsSlice",
 initialState,
 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(
    getDataNotificationThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    getDataNotificationThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<TimelineCards[]>
    ) => {
     state.adsList = actions.payload;
     state.isLoading = false;
    }
   )
   .addCase(
    getDataNotificationThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
   )
   //
   .addCase(
    setDataNotificationThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    setDataNotificationThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<TimelineCards>
    ) => {
     state.adsList.unshift({
      ...actions.payload,
     });
     state.isLoading = false;
    }
   )
   .addCase(
    setDataNotificationThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
   )

   //
   .addCase(
    updateDataNotificationThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    updateDataNotificationThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<
      [number, { userId: string; status: number }]
     >
    ) => {
     state.adsList = state.adsList.map((x) => {
      if (x.id === actions.payload[0]) {
       return {
        ...x,
        waitingForResponse: actions.payload[1],
       };
      } else return { ...x };
     });

     state.isLoading = false;
    }
   )
   .addCase(
    updateDataNotificationThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
   );
 },
});

//export const { } = adsSlice.actions;
export default notificationSlice.reducer;
