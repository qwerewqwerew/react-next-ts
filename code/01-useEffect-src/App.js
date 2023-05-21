import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const referralCheck = localStorage.getItem('isLoggedIn')
    if (referralCheck === '1') { setIsLoggedIn(true); }
  }, [])
  const loginFn = (email, password) => {
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true);
  };

  const logoutFn = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutFn} />
      <main>
        {!isLoggedIn && <Login onLogin={loginFn} />}
        {isLoggedIn && <Home onLogout={logoutFn} />}
      </main>
    </React.Fragment>
  );
}

export default App;
