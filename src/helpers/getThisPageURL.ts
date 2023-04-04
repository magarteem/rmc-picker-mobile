export const getThisPageURL = () => {
 const URL = window.location.href;
 navigator.clipboard.writeText(URL);
};
