import { useAddNote } from '@/hooks/useAddNote';

import css from './NoteForm.module.css';

interface NoteFormProps {
  onClose: () => void;
  onSuccess: boolean;
}

const NoteForm = ({ onClose, onSuccess }: NoteFormProps) => {
  const mutation = useAddNote();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      title: String(formData.get('title') ?? ''),
      content: String(formData.get('content') ?? ''),
      tag: String(formData.get('tag') ?? ''),
    };

    if (onSuccess) onClose();

    mutation.mutate(payload);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" className={css.input} />
        {/*<span name="title" className={css.error} />*/}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
        />
        {/*<span name="content" className={css.error} />*/}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select id="tag" name="tag" className={css.select}>
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
        {/*<span name="tag" className={css.error} />*/}
      </div>

      <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
