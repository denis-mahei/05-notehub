export interface Note {
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
