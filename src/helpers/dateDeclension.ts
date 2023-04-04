import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import "dayjs/locale/ru";

Dayjs.extend(relativeTIme);
Dayjs.extend(isToday);
Dayjs.locale("ru");

export const dateDeclension = (date: number, typeFormat?: string): string => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() - 2);
    newDate.setHours(0, 0, 0, 0);

    const format = typeFormat ?? "D MMMM YYYY в hh:mm"
    const renderDate =
        newDate.getTime() > date
            ? `${Dayjs(date).format(format)}`
            : `${Dayjs(date).isToday() ? "сегодня" : "вчера"
            } в ${Dayjs(date).format("H:mm")}`;

    return renderDate;
};
