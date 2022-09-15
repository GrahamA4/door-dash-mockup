import React from 'react';
import { Search } from '../features/SearchBar/Search';

export const Navbar = () => {
  return (
    <nav>
      <section className="navbar">
        <h2>DoorDash</h2>
        <Search />
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
};
