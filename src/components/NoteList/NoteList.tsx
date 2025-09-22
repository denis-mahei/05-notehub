import { useDeleteNote } from '@/hooks/useDeleteNote';
import type { Note } from '@/types/note';

import css from './NoteList.module.css';

interface NoteProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteProps) => {
  const mutationDelete = useDeleteNote();

  return (
    <ul className={css.list}>
      {notes.map(({ id, title, content, tag }) => (
        <li key={id} className={css.listItem}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.content}>{content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{tag}</span>
            <button
              className={css.button}
              onClick={() => mutationDelete.mutate(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
