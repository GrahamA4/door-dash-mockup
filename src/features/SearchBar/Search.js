import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchList } from './SearchList';
import { HistoryList } from './HistoryList';
import { searchAdded } from './searchSlice';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const markets = useSelector((state) => state.markets);
  const searchHistory = useSelector((state) => state.searches);

  const onSearchChange = (e) => setSearchTerm(e.target.value);
  const onSearchHistory = (e) => {
    if (searchTerm && e.key === 'Enter') {
      dispatch(searchAdded({ id: 'history', value: searchTerm }));
      setSearchTerm('');
    }
  };
  const titles = markets.map((store) => store.title.toLowerCase());

  const Match = titles.filter((title) =>
    title.includes(searchTerm.toLowerCase())
  );

  const renderedSearch = () => {
    if (Match.length === 0) {
      return <h4>not found</h4>;
    }
    if (Match && searchTerm) {
      return <SearchList list={searchedStores} />;
    } else {
      return <HistoryList list={searchHistory} />;
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
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {show ? renderedSearch() : null}
    </section>
  );
};
