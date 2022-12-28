import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './app/Navbar';
import { MarketsList } from './features/Markets/MarketsList';
import { AddMarketForm } from './features/Markets/AddMarketForm';
import { verifyUser } from './services/apiUsers';
import SignUp from './features/user/SignUp/userSignUp';
import { signOut } from './services/apiUsers';

function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    signOut();
    setUser(null);
  };

  return (
    <Router>
      <Navbar handleLogout={handleLogout} user={user} />
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
          <Route
            path="signUp"
            element={
              <SignUp
                setUser={setUser}
                user={user}
                screen={screen}
                setScreen={setScreen}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
