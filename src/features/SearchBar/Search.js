import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchList } from './SearchList';
import { HistoryList } from './HistoryList';
import { searchAdded } from './searchSlice';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const dispatch = useDispatch();

  const markets = useSelector((state) => state.markets);
  const searchHistory = useSelector((state) => state.searches);

  const onSearchChange = (e) => setSearchTerm(e.target.value);
  const onSearchHistory = (e) => {
    if (searchTerm && e.key === 'Enter') {
      dispatch(searchAdded(searchTerm));
      setSearchTerm('');
    }
  };

  const searchedStores = markets.filter(
    (store) =>
      store.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="searchBar">
      <input
        type="search"
        placeholder="Search stores,dishes,products"
        className="noOutline"
        value={searchTerm}
        onChange={onSearchChange}
        onKeyPress={onSearchHistory}
        onFocus={() => setShowHistory(true)}
        onBlur={() => setShowHistory(false) + setSearchTerm('')}
      />
      {searchTerm ? (
        <SearchList list={searchedStores} />
      ) : showHistory ? (
        <HistoryList list={searchHistory} />
      ) : null}
    </section>
  );
};
