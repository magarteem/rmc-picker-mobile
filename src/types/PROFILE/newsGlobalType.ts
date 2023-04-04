import { GenreGlobalType } from "./genreGlobalType";
import { InstrumentGlobalType } from "./InstrumentGlobalType";
import { CityResultsType } from "./cityGlobalType";

interface FormType {
 formId: string;
 name: string;
 avatar: string;
}
interface AttachmentsType {
 name: string;
 url: string;
}

export interface NewsGlobalType {
 id: string;
 body: string;
 type: string;
 form: FormType;
 city: CityResultsType;
 attachments: AttachmentsType[];
 genres: GenreGlobalType;
 instruments: InstrumentGlobalType;
}
