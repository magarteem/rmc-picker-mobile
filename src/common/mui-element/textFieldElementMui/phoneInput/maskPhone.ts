const PATTERN = /\D/g;
const getInputNumberValue = (value: string) => {
 return value.replace(PATTERN, "");
};

export const handlePhoneInput = (
 e: React.ChangeEvent<HTMLInputElement>
) => {
 const input = e.target;
 let inputNumberValue = getInputNumberValue(input.id);
 let formattedInputValue = "";
 const selectionStart = input.selectionStart;

 if (!inputNumberValue) {
  return (input.id = "");
 }

 if (input.id.length !== selectionStart) {
  return;
 }

 if (["7", "8", "9"].indexOf(inputNumberValue[0]) > -1) {
  if (inputNumberValue[0] === "9") {
   inputNumberValue = "7" + inputNumberValue;
  }

  const firstSumbol =
   inputNumberValue[0] === "8" ? "8" : "+7";
  formattedInputValue = firstSumbol + " ";

  if (inputNumberValue.length > 1) {
   formattedInputValue +=
    "(" + inputNumberValue.substring(1, 4);
  }

  if (inputNumberValue.length >= 5) {
   formattedInputValue +=
    ") " + inputNumberValue.substring(4, 7);
  }

  if (inputNumberValue.length >= 8) {
   formattedInputValue +=
    "-" + inputNumberValue.substring(7, 9);
  }
  if (inputNumberValue.length >= 10) {
   formattedInputValue +=
    "-" + inputNumberValue.substring(9, 11);
  }
 } else {
  formattedInputValue =
   "+" + inputNumberValue.substring(0, 16);
 }

 input.id = formattedInputValue;
};

export const handlePhoneKeyDown = (
 e: React.KeyboardEvent<HTMLInputElement>
) => {
 const input = e.target as HTMLInputElement;
 if (
  e.key === "Backspace" &&
  getInputNumberValue(input.id).length === 1
 ) {
  input.id = "";
 }
};

export const handlePhonePaste = (
 e: React.ClipboardEvent<HTMLInputElement>
) => {
 //@ts-ignore
 const pasted = e.clipboardData ?? window["clipboardData"];
 const input = e.target as HTMLInputElement;
 const inputNumberValue = getInputNumberValue(input.id);

 if (pasted) {
  const pastedText = pasted.getData("Text");

  if (PATTERN.test(pastedText)) {
   input.id = inputNumberValue;
  }
 }
};
