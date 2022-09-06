import React from 'react';

export const HistoryList = ({ list }) => {
  const renderedHistory = list.map((history) => (
    <ul>
      <li>{history}</li>
    </ul>
  ));

  return <section>{renderedHistory}</section>;
};
