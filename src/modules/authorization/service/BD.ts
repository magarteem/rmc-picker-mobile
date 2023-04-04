import { GenreType } from "../types/authType";
import vocals from "../../../assets/icons/iconsTools/vocals.svg";
import classical_guitar from "../../../assets/icons/iconsTools/classical_guitar.svg";
import ukulele from "../../../assets/icons/iconsTools/ukulele.svg";
import violin from "../../../assets/icons/iconsTools/violin.svg";
import alto from "../../../assets/icons/iconsTools/alto.svg";
import double_bass from "../../../assets/icons/iconsTools/double_bass.svg";
import cello from "../../../assets/icons/iconsTools/cello.svg";
import djembe from "../../../assets/icons/iconsTools/djembe.svg";
import balalaika from "../../../assets/icons/iconsTools/balalaika.svg";
import saxophone from "../../../assets/icons/iconsTools/saxophone.svg";
import tuba from "../../../assets/icons/iconsTools/tuba.svg";
import trombone from "../../../assets/icons/iconsTools/trombone.svg";
import horn from "../../../assets/icons/iconsTools/horn.svg";
import xylophone from "../../../assets/icons/iconsTools/xylophone.svg";
import accordion from "../../../assets/icons/iconsTools/accordion.svg";
import organ from "../../../assets/icons/iconsTools/organ.svg";
import bagpipes from "../../../assets/icons/iconsTools/bagpipes.svg";
import piano from "../../../assets/icons/iconsTools/piano.svg";
import synthesizer from "../../../assets/icons/iconsTools/synthesizer.svg";
import { InterfaceGlobalSelectType } from "../../../types/interfaseGlobal/interfaseGlobalSelect";
import { EnumTypeAccount } from "../../../types/PROFILE/enum/EnumTypeAccount";
import { InstrumentGlobalType } from "../../../types/PROFILE/InstrumentGlobalType";
import { EnumTypeGender } from "../../../types/PROFILE/enum/EnumTypeGender";
import { EnumSkillType } from "../../../types/PROFILE/enum/EnumSkillType";
import { EnumPrivateType } from "../../../types/PROFILE/enum/EnumPrivateType";

export const optionsTypeAccount: InterfaceGlobalSelectType[] = [
 { id: EnumTypeAccount.MUSICIAN, name: "Музыкант" },
 { id: EnumTypeAccount.TEAM, name: "Группа / Коллектив" },
 {
  id: EnumTypeAccount.INSTITUTION,
  name: "Заведение / Площадка для выступлений",
 },
 {
  id: EnumTypeAccount.MUSICIAN_SCHOOL,
  name: "Музыкальная школа",
 },
 {
  id: EnumTypeAccount.REHEARSAL_BASE,
  name: "Репетиционная точка",
 },
 {
  id: EnumTypeAccount.MUSIC_SHOP,
  name: "Музыкальный магазин",
 },
 {
  id: EnumTypeAccount.MUSICAL_WORKSHOP,
  name: "Мастерская музыкальных инструментов",
 },
 {
  id: EnumTypeAccount.SOUND_PRODUCER,
  name: "Звукорежиссёр",
 },
 {
  id: EnumTypeAccount.RECORDING_STUDIO,
  name: "Студия звукозаписи",
 },
];

export const genderBD: InterfaceGlobalSelectType[] = [
 { id: EnumTypeGender.MALE, name: "Мужской" },
 { id: EnumTypeGender.FEMALE, name: "Женский" },
 { id: EnumTypeGender.OTHER, name: "Другое" },
];

export const groupeOptions: InstrumentGlobalType[] = [
 {
  id: "dsdsd",
  name: "Вокал",
  icon: null,
  subInstruments: [
   { name: "Тенор", id: "value_1", icon: vocals },
   { name: "Баритон", id: "value_2", icon: vocals },
   { name: "Бас", id: "value_23", icon: vocals },
   {
    name: "Сопрано",
    id: "value_42",
    icon: vocals,
   },
   {
    name: "Меццо-сопрано",
    id: "value_52",
    icon: vocals,
   },
   {
    name: "Контральто",
    id: "value_26",
    icon: vocals,
   },
  ],
 },
 {
  id: "dsddddsd",
  name: "Клавишные",
  icon: null,
  subInstruments: [
   {
    name: "Аккордеон",
    id: "аккордеон",
    icon: accordion,
   },
   {
    name: "Ксилофон",
    id: "xylophone",
    icon: xylophone,
   },
   { name: "Орган", id: "organ", icon: organ },
   { name: "Фортепиано", id: "piano", icon: piano },
   {
    name: "Синтезатор",
    id: "synthesizer",
    icon: synthesizer,
   },
  ],
 },
 {
  id: "dsdrrrsd",
  name: "Духовые",
  icon: null,
  subInstruments: [
   {
    name: "Саксофон",
    id: "saxophone",
    icon: saxophone,
   },
   {
    name: "Труба",
    id: "pipe",
    icon: tuba,
   },
   {
    name: "Тромбон",
    id: "trombone",
    icon: trombone,
   },
   {
    name: "Валторна",
    id: "french_horn",
    icon: horn,
   },
   {
    name: "Туба",
    id: "tuba",
    icon: tuba,
   },
   {
    name: "Геликон",
    id: "helicon",
    icon: xylophone,
   },
   {
    name: "Сузафон",
    id: "sousaphone",
    icon: xylophone,
   },
   {
    name: "Волынка",
    id: "bagpipes",
    icon: bagpipes,
   },
   {
    name: "Саксофон",
    id: "saxophone",
    icon: saxophone,
   },
  ],
 },
 {
  id: "dsyyyydsd",
  name: "Струнные",
  icon: null,
  subInstruments: [
   {
    name: "Классическая гитара",
    id: "classical_guitar",
    icon: classical_guitar,
   },
   {
    name: "Укулеле",
    id: "ukulele",
    icon: ukulele,
   },
   {
    name: "Скрипка",
    id: "violins",
    icon: violin,
   },
   {
    name: "Альта",
    id: "violas",
    icon: alto,
   },
   {
    name: "Контрабас",
    id: "вouble_basses",
    icon: double_bass,
   },
   {
    name: "Виолончели",
    id: "cellos",
    icon: cello,
   },
   {
    name: "Домра",
    id: "domry",
    icon: djembe,
   },
   {
    name: "Балалайка",
    id: "balalaikas",
    icon: balalaika,
   },
   {
    name: "Гусли",
    id: "gusli",
    icon: saxophone,
   },
  ],
 },
];

export const genreBD: GenreType[] = [
 {
  id: "classical",
  name: "Классическая",
  color: "#1E86FF",
 },
 {
  id: "folk-narod",
  name: "Народная",
  color: "#FFC633",
 },
 {
  id: "spiritual",
  name: "Духовная",
  color: "#F05A4F",
 },

 {
  id: "pop_music",
  name: "Поп-музыка",
  color: "#E290DA",
 },

 {
  id: "folk",
  name: "Фолк",
  color: "#FFC633",
 },
 { id: "country", name: "Кантри", color: "#F05A4F" },
 { id: "blues", name: "Блюз", color: "#FFC633" },
 {
  id: "garage blues",
  name: "Гаражный блюз",
  color: "#000",
 },
 {
  id: "rhythm_and_blues",
  name: "Ритм-н-блюз",
  color: "#FF6A6A",
 },
 { id: "funk", name: "Фанк", color: "#7E7E7D" },

 {
  id: "helicon",
  name: "Геликон",
  color: "#dd1558",
 },
 {
  id: "electron",
  name: "электронная",
  color: "#45BCFF",
 },
 {
  id: "iron",
  name: "Метал",
  color: "#F05A4F",
 },

 {
  id: "latin_american_music",
  name: "Латиноамериканская",
  color: "#FF9B62",
 },
 { id: "jazz", name: "Джаз", color: "#C4764A" },
 { id: "chanson", name: "Шансон", color: "#7E7E7D" },
 {
  id: "hip-hop",
  name: "Хип-хоп",
  color: "#404D5C",
 },
];

export const skillBD: InterfaceGlobalSelectType[] = [
 { id: EnumSkillType.NO_SKILL, name: "Диванный" },
 { id: EnumSkillType.NEWBIE, name: "Новичок" },
 { id: EnumSkillType.CONFIDENT, name: "Уверенный" },
 { id: EnumSkillType.MASTER, name: "Мастер" },
 { id: EnumSkillType.START, name: "Звезда" },
 { id: EnumSkillType.TEACHER, name: "Преподаватель" },
];

export const profilePrivacySettings: InterfaceGlobalSelectType[] = [
 {
  id: EnumPrivateType.SHOW_ALL,
  name: "Публичная анкета",
 },
 {
  id: EnumPrivateType.HIDE_CONTACTS,
  name: "Частично открытая анкета",
 },
 { id: EnumPrivateType.HIDE_ALL, name: "Закрытая анкета " },
];
