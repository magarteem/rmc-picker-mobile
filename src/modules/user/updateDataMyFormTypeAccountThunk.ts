import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiProfile from "../../api/axiosConfigPROFILE";
import { RootState } from "../../core/redux/app/store";
import { autoLoginAfteRegistration } from "../authorization/authSlice";
interface PutId {
 typeAccount: string; // {id i nameForm}
 bodyDataSend: any; // data form
}
export const updateDataMyFormTypeAccountThunk = createAsyncThunk<
 AxiosResponse<string>,
 PutId,
 { rejectWithValue: string; state: RootState }
>(
 `updateDataMyFormTypeAccountThunk/update-profile`,
 async function ({ typeAccount, bodyDataSend }, { rejectWithValue, dispatch }) {
  try {
   console.log("1");
   const response = await apiProfile
    .put(`form/${JSON.parse(typeAccount).nameForms}/${JSON.parse(typeAccount).id}`, bodyDataSend)
    .then((response) => apiProfile(`form/${response.data.id}`))
    .then((res) => {
     console.log("2");
     dispatch(autoLoginAfteRegistration());
     return res;
    });

   return response.data;
  } catch (error) {
   console.log("err auth");
   return rejectWithValue(error);
  }
 }
);
