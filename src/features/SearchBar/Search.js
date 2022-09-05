import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchList } from './SearchList';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const markets = useSelector((state) => state.markets);

  const onSearchChange = (e) => setSearchTerm(e.target.value);

  const searchedStores = markets.filter(
    (store) =>
      store.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="searchBar">
      {/* {!searchTerm ? (
        <label htmlFor="Search">Search stores,dishes,products</label>
      ) : (
        console.log(false)
      )} */}
      <input
        placeholder="Search stores,dishes,products"
        className="noOutline"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {searchTerm ? <SearchList list={searchedStores} /> : null}
    </section>
  );
};
