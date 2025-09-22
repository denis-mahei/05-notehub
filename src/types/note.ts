export interface Note {
  mutate(objValue: { [k: string]: FormDataEntryValue }): unknown;
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: ['Personal', 'Work', 'Meeting', 'Shopping', 'Todo'];
}

export interface FetchResponseHttp {
  notes: Note[];
  totalPages: number;
}

export interface NoteInput {
  title: string;
  content: string;
  tag: string;
}
