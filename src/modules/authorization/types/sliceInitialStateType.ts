import {
 LoginResponseErrorType,
 LoginResponseType,
} from "./authType";

export interface InitialStateType {
 responseLogin: LoginResponseType | null;
 isAuth: boolean;
 thisMyFormsId: string;
 error: LoginResponseErrorType | null;
}
