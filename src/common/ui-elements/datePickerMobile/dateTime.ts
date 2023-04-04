export const monthMap = {
 "1": "Янв",
 "2": "Фев",
 "3": "Мрт",
 "4": "Апр",
 "5": "Май",
 "6": "Июнь",
 "7": "Июль",
 "8": "Авг",
 "9": "Сен",
 "10": "Ост",
 "11": "Ноя",
 "12": "Дек",
};

export interface DateTimeType {
 type: string;
 format: string | any;
 caption: string;
 step: number;
}

export const dateConfig: DateTimeType[] = [
 {
  type: "year",
  format: "YYYY",
  caption: "Год",
  step: 1,
 },
 {
  type: "month",
  //@ts-ignore
  format: (value: Date) => monthMap[value.getMonth() + 1],
  caption: "Мес",
  step: 1,
 },
 {
  type: "date",
  format: "DD",
  caption: "День",
  step: 1,
 },
 {
  type: "hour",
  format: "hh",
  caption: "Час",
  step: 1,
 },
 {
  type: "minute",
  format: "mm",
  caption: "Мин",
  step: 1,
 },
 {
  type: "year",
  format: "YY",
  caption: "Возраст",
  step: 1,
 },
];

export const mapTypeData = (
 typePicker: "age" | "time" | "date" | "year_one"
) => {
 switch (typePicker) {
  case "year_one":
   return dateConfig.slice(5, 6);
  case "age":
   return dateConfig.slice(5, 6);
  case "time":
   return dateConfig.slice(3, 5);
  case "date":
   return dateConfig.slice(0, 3);

  default:
   break;
 }
};
