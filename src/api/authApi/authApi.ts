import axios from "axios";

const authApi = axios.create({
 baseURL: process.env.REACT_APP_API_URL_SSO,
 headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
 },
 // withCredentials: true,
});
export default authApi;
