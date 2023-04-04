import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { EnumNewsThemeType } from "../../../types/PROFILE/enum/EnumNewsThemeType";

export const optionСategoryBD: InterfaceGlobalSelectType[] = [
 { id: EnumNewsThemeType.MUSIC_NEWS, name: "В мире музыки" },
 { id: EnumNewsThemeType.MEME, name: "Мемология" },
 {
  id: EnumNewsThemeType.TECHNICAL_QUESTION,
  name: "Технические вопросы",
 },
 { id: EnumNewsThemeType.PLAYBILL, name: "Реклама" },
 //{ id: "Tritone", name: "Афиша" },
];

export const selectTypeNews: { [key: string]: string } = {
 MusicNews: "В мире музыки",
 Tritone: "Афиша",
 Meme: "Мемология",
 TechnicalQuestion: "Технические вопросы",
 Playbill: "Реклама",
};
