import { getJsonParseLocalStorage } from "../../../helpers/getJsonParseLocalStorage";
import apiProfile from "../../axiosConfigPROFILE";

const parseId = getJsonParseLocalStorage();
export const apiUploadImages = {
 uploadImages: async (imgFile: FormData, strId: string) => {
  console.log("parseId", strId);
  try {
   const { status, data } = await apiProfile.post(
    `https://profile.test.3-tone.ru/api/v1/form/profile/${strId}`,
    imgFile
   );

   if (status === 200) return data;

   throw new Error(data);
  } catch (error) {
   return error;
  }
 },
};

//const getPortfoloo = await apiUploadImages.uploadImages(
// formDataImg,
// JSON.parse(parseId).id
//);
//console.log(getPortfoloo);
//
