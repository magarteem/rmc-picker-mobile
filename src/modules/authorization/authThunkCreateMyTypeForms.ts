import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiProfile from "../../api/axiosConfigPROFILE";
import { setJsonLocalStorage } from "../../helpers/getJsonParseLocalStorage";
import { LoginResponseType } from "./types/authType";

export const authThunkCreateMyTypeForms = createAsyncThunk<
 AxiosResponse<LoginResponseType>,
 string
>(
 `authThunkCreateMyTypeForms/create-forms`,
 async function (typeProfileAccount, { rejectWithValue }) {
  try {
   const response = await apiProfile.post(
    `form/${typeProfileAccount}`
   );

   setJsonLocalStorage(
    response.data.id,
    typeProfileAccount
   );
   return response.data.id;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);
