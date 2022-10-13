import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { MarketsList } from './features/Markets/MarketsList';
import { AddMarketForm } from './features/Markets/AddMarketForm';
import { User } from './features/user/user';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <React.Fragment>
                <MarketsList />
                <AddMarketForm />
              </React.Fragment>
            }
          />
          <Route path="login" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
