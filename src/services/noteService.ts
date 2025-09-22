import type { FetchResponseHttp, Note, NoteInput } from '@/types/note';
import { api } from './apiCreate';

export const fetchNotes = async (
  query: string,
  pages: number
): Promise<FetchResponseHttp> => {
  const res = await api.get('/notes', {
    params: {
      search: query,
      page: pages,
    },
  });
  return res.data;
};

export const addNewNote = async (newNote: NoteInput): Promise<Note> => {
  const res = await api.post('/notes', newNote);
  return res.data.notes;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await api.delete(`/notes/${id}`);
  return res.data.notes;
};
