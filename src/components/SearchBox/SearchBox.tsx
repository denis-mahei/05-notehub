import css from './SearchBox.module.css';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchBox = ({ value, onSearch }) => {
  const [debouncedVal, setDebouncedVal] = useState(value);
  const debouncedSearch = useDebouncedCallback(onSearch, 300);
  return (
    <input
      className={css.input}
      type="text"
      value={debouncedVal}
      onChange={(event) => {
        setDebouncedVal(event.target.value);
        debouncedSearch(event.target.value);
      }}
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
