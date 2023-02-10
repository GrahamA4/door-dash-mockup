import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../features/SearchBar/Search';

export const Navbar = ({ user, handleLogout }) => {
  const loggedOut = (
    <>
      <Link to="signUp">Sign Up</Link>
      <Link to="signIn">SignIn</Link>
    </>
  );

  return (
    <nav>
      <section className="navbar">
        {/* HomePage */}

        <Link to="/">
          <h2 className="Home">DoorDash</h2>
        </Link>

        {/* renders SearchBar */}
        <Search />

        {/* Checks wheter user is logged in or out */}
        {user ? (
          <>
            <div>{`Hello ${user.firstName}`}</div>
            <button className="links" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          loggedOut
        )}
      </section>
    </nav>
  );
};
