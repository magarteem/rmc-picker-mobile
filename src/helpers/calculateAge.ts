export const calculateAge = (value: number) => {
 const now = new Date();
 const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate()
 );
 const dob = new Date(value);
 const dobnow = new Date(
  today.getFullYear(),
  dob.getMonth(),
  dob.getDate()
 );
 let age;

 age = today.getFullYear() - dob.getFullYear();
 if (today < dobnow) {
  age = age - 1;
 }

 return `${age}`;
};
