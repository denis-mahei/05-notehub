import React from 'react';

import css from './SearchBox.module.css';

interface SearchProps {
  value: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ value, onSearch }: SearchProps) => {
  return (
    <input
      className={css.input}
      type="text"
      defaultValue={value}
      onChange={onSearch}
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
