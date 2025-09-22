import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewNote } from '@/services/noteService';
import type { Note, NoteInput } from '@/types/note';

export const useAddNote = () => {
  const queryClient = useQueryClient();

  return useMutation<Note, Error, NoteInput>({
    mutationFn: (newNote) => addNewNote(newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};
