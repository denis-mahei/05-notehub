import axios from 'axios';
import type { FetchResponseHttp, Note } from '@/types/note';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

const api_token = import.meta.env.VITE_NOTEHUB_TOKEN;

export const fetchNotes = async (
  query: string,
  pages: number
): Promise<FetchResponseHttp> => {
  const res = await axios.get('/notes', {
    params: {
      search: query,
      page: pages
    },
    headers: {
      Authorization: `Bearer ${api_token}`,
    },
  });
  return res.data;
};

export const addNewNote = async (newNote: Note) => {
  const res = await axios.post('/note', newNote);
  return res.data.note;
};
