import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { MarketsList } from './features/Markets/MarketsList';
import { AddMarketForm } from './features/Markets/AddMarketForm';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
