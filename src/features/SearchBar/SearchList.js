import React from 'react';

export const SearchList = ({ list }) => {
  const renderedSearch = list.map((store) => (
    <ul>
      <h4>{store.title}</h4>
      <li>{store.content}</li>
    </ul>
  ));

  return <section className="search">{renderedSearch}</section>;
};
