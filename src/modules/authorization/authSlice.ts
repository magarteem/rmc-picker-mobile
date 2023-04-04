import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponseType } from "../../types/SSO/loginResponseType";
import { authThunkCreateMyTypeForms } from "./authThunkCreateMyTypeForms";
import { authThunkLogin } from "./authThunkLogin";
import { authThunkRegister } from "./authThunkRegister";
import { LoginResponseErrorType } from "./types/authType";
import { InitialStateType } from "./types/sliceInitialStateType";

const initialState: InitialStateType = {
 responseLogin: null,
 isAuth: !!localStorage.getItem(`auth-token`),
 thisMyFormsId: "",
 error: null,
};

const authSlice = createSlice({
 name: "authSlice",
 initialState,

 reducers: {
  autoLoginAfteRegistration(state: InitialStateType) {
   state.isAuth = true;
  },
  logout(state: InitialStateType) {
   localStorage.removeItem(`auth-token`);
   state.isAuth = false;
  },
 },

 extraReducers: (builder) => {
  builder
   // LOG
   .addCase(authThunkLogin.pending.type, (state: InitialStateType) => {
    state.error = null;
   })
   .addCase(
    authThunkLogin.fulfilled.type,
    (state: InitialStateType, actions: PayloadAction<LoginResponseType>) => {
     state.error = null;
     localStorage.setItem("auth-token", `${actions.payload.token.value}`);
     state.responseLogin = actions.payload;
     state.isAuth = !!actions.payload;
    }
   )
   .addCase(
    authThunkLogin.rejected.type,
    (state: InitialStateType, actions: PayloadAction<LoginResponseErrorType>) => {
     console.log("Error s");
     state.error = actions.payload;
    }
   )

   // REG
   .addCase(authThunkRegister.pending.type, (state: InitialStateType) => {
    state.error = null;
   })
   .addCase(
    authThunkRegister.fulfilled.type,
    (state: InitialStateType, actions: PayloadAction<LoginResponseType>) => {
     state.error = null;
     localStorage.setItem("auth-token", `${actions.payload.token.value}`);
     state.responseLogin = actions.payload;
    }
   )
   .addCase(
    authThunkRegister.rejected.type,
    (state: InitialStateType, actions: PayloadAction<LoginResponseErrorType>) => {
     state.error = actions.payload;
    }
   )

   // FORM
   .addCase(authThunkCreateMyTypeForms.pending.type, (state: InitialStateType) => {
    state.error = null;
   })
   .addCase(
    authThunkCreateMyTypeForms.fulfilled.type,
    (state: InitialStateType, actions: PayloadAction<string>) => {
     console.log("authThunkCreateMyTypeForms = ", actions.payload);
     state.thisMyFormsId = actions.payload;
    }
   )
   .addCase(
    authThunkCreateMyTypeForms.rejected.type,
    (state: InitialStateType, actions: PayloadAction<string>) => {
     console.log("error = ", actions.payload);
    }
   );
 },
});

export const { autoLoginAfteRegistration, logout } = authSlice.actions;
export default authSlice.reducer;
