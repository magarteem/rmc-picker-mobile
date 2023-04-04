export const styleTextFieldSX = {
 input: {
  width: "100% !important",
  fontWeight: "700  !important",
  fontSize: "14px",
  color: "#242424 ",
  fontFamily: `Mulish_Regular, sans-serif !important`,
  padding: "0",
  height: "100% !important",

  "& .MuiFormLabel-root": {
   lineHeight: "inherit",
   color: "#1A1C18 !important",

   "& .MuiFormLabel-asterisk": {
    color: "red",
   },
  },

  "& .Mui-focused": {
   color: "#1A1C18 !important",
  },

  "& .MuiInputBase-root": {
   height: "100%",
   borderRadius: "8px",

   "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#1A1C18",
   },

   "& input": {
    color: "#1A1C18",
    padding: "0 14px  !important",
    fontFamily: `Mulish_Regular, sans-serif !important`,
    fontSize: "16px !important",
    fontWeight: "600 !important",
   },

   "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #C6D1B8 !important",
    borderRadius: "8px",
   },

   "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    border: "1px solid red !important",
   },
  },

  "& .MuiFormHelperText-root": {
   position: "absolute",
   bottom: "-18px",
   color: "#ff0000 !important",
  },
 },
};
