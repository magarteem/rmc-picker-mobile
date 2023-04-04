import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi/authApi";
import apiProfile from "../../api/axiosConfigPROFILE";
import { MyTypeFormsAccountProfileType } from "./types/myTypeFormProfile";

export const getMyProfileApiThunk = createAsyncThunk<
 MyTypeFormsAccountProfileType[],
 undefined
>(
 `getMyProfileApiThunk/user`,
 async function (_, { rejectWithValue }) {
  try {
   const response = await apiProfile(`form/my`);

   return response.data;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);
