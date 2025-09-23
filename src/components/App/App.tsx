import { useState } from 'react';
import { useFetchNotes } from '@/hooks/useFetchNotes';
import { useDebouncedCallback } from 'use-debounce';
import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';
import Loading from '@/components/Loading/Loading';

import css from './App.module.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const { data, isLoading, isError, isSuccess } = useFetchNotes(
    searchQuery,
    currentPage
  );

  const totalPages = data?.totalPages ?? 0;

  const updateSearchQuery = useDebouncedCallback(
    (event) => setSearchQuery(event.target.value),
    300
  );

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onSearch={updateSearchQuery} />
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
        {isOpen && (
          <Modal onClose={closeModal}>
            <NoteForm onClose={closeModal} onSuccess={isSuccess} />
          </Modal>
        )}
      </header>
      {isError && <p>Error loading notes</p>}
      {isLoading && <Loading />}
      {data?.notes && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
};
export default App;
