export const styleTextFieldSX = {
 width: "100% !important",
 fontSize: "12px",
 color: "#242424 ",
 fontFamily: `Mulish_Regular, sans-serif !important`,
 padding: "0",
 height: "100% !important",

 "& .MuiFormLabel-root": {
  lineHeight: "inherit",
  color: "#1A1C18 !important",
  fontSize: "14px !important",

  "& .MuiFormLabel-asterisk": {
   color: "red",
  },
 },

 "& .MuiInputLabel-shrink": {
  display: "none",
  "@media (max-width:400px)": {
   display: "block",
  },
 },

 "& .MuiInputBase-root": {
  height: "100%",
  padding: "1px 0 !important",

  "& input": {
   color: "#1A1C18",
   padding: "0 14px  !important",
   fontFamily: `Mulish_Regular, sans-serif !important`,
   fontSize: "14px !important",
  },

  "& .MuiOutlinedInput-notchedOutline": {
   border: "none !important",
   borderRadius: "8px",

   "@media (max-width:400px)": {
    border: "1px solid #C6D1B8 !important",
   },
  },

  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
   border: "none !important",
  },
 },

 "& .MuiFormHelperText-root": {
  position: "absolute",
  bottom: "-18px",
  color: "#ff0000 !important",
 },
};
