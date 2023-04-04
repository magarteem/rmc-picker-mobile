import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import authApi from "../../api/authApi/authApi";
import {
 LoginRequestType,
 LoginResponseType,
} from "./types/authType";

export const authThunkLogin = createAsyncThunk<
 AxiosResponse<LoginResponseType>,
 LoginRequestType
>(
 `authorization/sign-In`,
 async function (data, { rejectWithValue }) {
  try {
   const response = await authApi.post(`auth/login`, data);
   return response.data;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

//const response = await fetch(
//  `https://localhost:7265/api/v1/auth/login`,
//  {
//   method: "POST",
//   headers: {
//    Accept: "application/json",
//    "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//    email: "t@t.t",
//    password: "ttt",
//   }),
//  }
// ).then((res) => res.json());
// console.log(response.json());

//if (status === 200) {
//  storage.setItem("sid", data.security.MW_SSID);
//  dispatch(getChanelListThunk())
//  return data;
//} else throw data
