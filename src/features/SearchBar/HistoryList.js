import React from 'react';

export const HistoryList = ({ list }) => {
  const renderedHistory = list.map((history) => (
    <ul>
      <li>{history.value}</li>
    </ul>
  ));

  return <section>{renderedHistory}</section>;
};
