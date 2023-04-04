import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAdsThunk = createAsyncThunk<
 number,
 number
>(
 `deleteAdsThunk/deleteAdsThunk-items`,
 async function (postIdDell, { rejectWithValue }) {
  try {
   //return await new Promise(resolve => setTimeout(resolve, 1000));

   return postIdDell;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
