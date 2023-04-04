import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import authApi from "../../api/authApi/authApi";
import {
 LoginRequestType,
 LoginResponseType,
} from "./types/authType";

export const authThunkRegister = createAsyncThunk<
 AxiosResponse<LoginResponseType>,
 LoginRequestType
>(
 `authorization/sign-Up`,
 async function (data, { rejectWithValue }) {
  try {
   const response = await authApi.post(
    `auth/registration`,
    data
   );
   return response.data;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);
