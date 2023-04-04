import noSkill from "../../../assets/icons/skills/noSkill.svg";
import confident from "../../../assets/icons/skills/confident.svg";
import master from "../../../assets/icons/skills/master.svg";
import newbie from "../../../assets/icons/skills/newbie.svg";
import star from "../../../assets/icons/skills/star.svg";
import teacher from "../../../assets/icons/skills/teacher.svg";

interface TranslationType {
 [key: string]: string;
}

export const translationEmploymentType: TranslationType = {
 PartTimeEmployment: "Частичная занятость",
 FullEmployment: "Полная занятость",
 FreeTimeEmployment: "В свободное время",
 BusyWork: "Напряженный график",
};

export const translationGender: TranslationType = {
 Male: "Мужской",
 Female: "Женский",
 Other: "Другое",
};

export const skillGenerator: { [key: string]: { name: string; src: string } } = {
 NoSkill: {
  name: "Диванный",
  src: noSkill,
 },
 Newbie: {
  name: "Новичёк",
  src: newbie,
 },
 Confident: {
  name: "Уверенный",
  src: confident,
 },
 Master: {
  name: "Мастер",
  src: master,
 },
 Star: {
  name: "Звезда",
  src: star,
 },
 Teacher: {
  name: "Преподаватель",
  src: teacher,
 },
};
