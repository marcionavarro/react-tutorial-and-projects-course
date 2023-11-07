import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;
