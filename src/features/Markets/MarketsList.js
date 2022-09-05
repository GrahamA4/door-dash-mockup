import React from 'react';
import { useSelector } from 'react-redux';

export const MarketsList = () => {
  const markets = useSelector((state) => state.markets);

  const renderedMarkets = markets.map((market) => (
    <article className="market-excerpt" key={market.id}>
      <h3>{market.title}</h3>
      <p>{market.content}</p>
    </article>
  ));

  return (
    <section className="markets">
      <h2>Stores</h2>
      {renderedMarkets}
    </section>
  );
};
