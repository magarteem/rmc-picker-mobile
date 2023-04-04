export const getJsonParseLocalStorage = () =>
 localStorage.getItem(`active-my-forms`) || "{}";

interface DoneParseLocalStorageType {
 id: string;
 nameForms: string;
}
export const doneParseLocalStorage: DoneParseLocalStorageType =
 JSON.parse(getJsonParseLocalStorage());

export const setJsonLocalStorage = (
 strID: string,
 strNameForms: string
) =>
 localStorage.setItem(
  "active-my-forms",
  JSON.stringify({
   id: strID,
   nameForms: strNameForms,
  })
 );

export const setLocalStorageSwiperActiv = (strID: number) =>
 localStorage.setItem(
  "active-forms-id",
  JSON.stringify({
   id: strID,
  })
 );

export const getLocalStorageSwiperActiv = (): number => {
 const parseJson =
  localStorage.getItem("active-forms-id") || "{}";
 return JSON.parse(parseJson).id;
};
