import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChangeProfileFormValues } from "./types/userSliceType";

export const changeProfileThunk = createAsyncThunk<
 ChangeProfileFormValues,
 ChangeProfileFormValues | any
>(
 `changeProfile/user`,
 async function (data, { rejectWithValue }) {
  try {
   // console.log("data thunk =", data);
   return data;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);
