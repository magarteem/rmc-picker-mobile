import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteAdsThunk } from "./deleteAdsThunk";
import { getDataAdsThunk } from "./getDataAdsThunk";
import { InitialStateAdsType, TimelineCards } from "./types/adsSliceType";

const initialState: InitialStateAdsType = {
 adsList: [],
 isLoading: false,
 error: null,
};

const adsSlice = createSlice({
 name: "adsSlice",
 initialState,
 reducers: {
  updateStatusAds(state: InitialStateAdsType, action: PayloadAction<any>) {
   state.adsList = state.adsList.map((x) => {
    if (x.id === action.payload.idAds) {
     return {
      ...x,
      waitingForResponse: {
       userId: action.payload.userId,
       status: action.payload.status,
      },
     };
    } else {
     return { ...x };
    }
   });
  },
 },

 extraReducers: (builder) => {
  builder
   .addCase(getDataAdsThunk.pending.type, (state: InitialStateAdsType) => {
    state.isLoading = true;
   })
   .addCase(
    getDataAdsThunk.fulfilled.type,
    (state: InitialStateAdsType, actions: PayloadAction<TimelineCards[]>) => {
     state.adsList = actions.payload;
     state.isLoading = false;
    }
   )
   .addCase(
    getDataAdsThunk.rejected.type,
    (state: InitialStateAdsType, actions: PayloadAction<string>) => {}
   )
   //
   .addCase(deleteAdsThunk.pending.type, (state: InitialStateAdsType) => {
    state.isLoading = true;
   })
   .addCase(
    deleteAdsThunk.fulfilled.type,
    (state: InitialStateAdsType, actions: PayloadAction<number>) => {
     console.log("333");
     state.isLoading = false;
     state.adsList = state.adsList.filter((x) => x.id !== actions.payload);
    }
   )
   .addCase(
    deleteAdsThunk.rejected.type,
    (state: InitialStateAdsType, actions: PayloadAction<string>) => {
     console.log("setNewNewsTimeLineThunk");
    }
   );
 },
});

export const { updateStatusAds } = adsSlice.actions;
export default adsSlice.reducer;
