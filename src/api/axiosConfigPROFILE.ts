import axios from "axios";
//import Cookies from "js-cookie";

export const apiProfile = axios.create({
 baseURL: process.env.REACT_APP_API_URL_PROFILE,
});

apiProfile.interceptors.request.use(
 (config: any) => {
  //const tokenLocalStorage = Cookies.get(`token`);
  const tokenLocalStorage =
   localStorage.getItem(`auth-token`);

  if (tokenLocalStorage) {
   config.headers.Authorization = `Bearer ${tokenLocalStorage}`;
   config.headers.Accept = `application/json`;
   // config.headers.type = `application/json`;
  }
  return config;
 },
 (error) => {
  console.log("apiProfile => error");
  console.log(error);
  return Promise.reject(error);
 }
);
export default apiProfile;
