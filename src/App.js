import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { MarketsList } from './features/Markets/MarketsList';
import { AddMarketForm } from './features/Markets/AddMarketForm';
import SignUp from './features/user/userSignUp';
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
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
