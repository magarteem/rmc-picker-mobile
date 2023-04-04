import axios from "axios";
//import Cookies from "js-cookie";

export const apiSSO = axios.create({
 baseURL: process.env.REACT_APP_API_URL_SSO,
});

apiSSO.interceptors.request.use(
 (config: any) => {
  //const tokenLocalStorage = Cookies.get(`token`);
  const tokenLocalStorage =
   localStorage.getItem(`auth-token`);

  if (tokenLocalStorage) {
   config.headers.Authorization = `Bearer ${tokenLocalStorage}`;
  }
  return config;
 },
 (error) => {
  console.log("apiSSO => error");
  console.log(error);
  return Promise.reject(error);
 }
);
export default apiSSO;
