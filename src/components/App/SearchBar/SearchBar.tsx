import React, { useState } from 'react';

// Styles
import './SearchBar.scss';

// Import des composants
import { TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';

// Props
interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSearch(inputValue);
    setInputValue('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  return (
    <div className=" searchBar">
      <form action="submit" onSubmit={handleSubmit}>
        <TextInput
          onChange={handleChange}
          className="searchBar-input"
          value={inputValue}
          id="search"
          type="text"
          icon={HiSearch}
          sizing="lg"
          placeholder="Rechercher un repo ..."
          required
        />
      </form>
    </div>
  );
}
