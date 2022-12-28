import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../features/SearchBar/Search';

export const Navbar = ({ user, handleLogout }) => {
  return (
    <nav>
      <section className="navbar">
        <Link to="/">
          <h2 className="Home">DoorDash</h2>
        </Link>
        <Search />
        <Link to="signUp">Sign Up</Link>

        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
      <div>{user ? `Hello ${user.firstName}` : null}</div>
      <button className="links" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};
