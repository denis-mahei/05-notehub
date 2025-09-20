import { useState } from 'react';
import { useFetchNotes } from '@/hooks/useFetchNotes';
import { useDebouncedCallback } from 'use-debounce';
import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

import css from './App.module.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useFetchNotes(searchQuery, currentPage);
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
        <button className={css.button}>Create note +</button>
      </header>
      {data?.notes && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
};
export default App;
