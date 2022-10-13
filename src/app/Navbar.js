import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../features/SearchBar/Search';

export const Navbar = () => {
  return (
    <nav>
      <section className="navbar">
        <Link to="/">
          <h2 className="Home">DoorDash</h2>
        </Link>
        <Search />
        <Link to="login">Login</Link>

        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
};
