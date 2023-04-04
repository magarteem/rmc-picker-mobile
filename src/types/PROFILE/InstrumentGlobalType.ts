export interface ToolsGroupeItemType {
 name: string;
 id: string;
 icon: string;
}

export interface InstrumentGlobalType {
 id: string;
 name: string;
 icon: string | null;
 subInstruments: ToolsGroupeItemType[];
}
