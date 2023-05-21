import React, { useState, useEffect } from 'react';
import AuthContext from "./store/auth-context";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


function App()
{
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() =>
  {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginFn = (email, password) =>
  {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutFn = () =>
  {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={ {
      //isLoggedIn: false
      isLoggedIn: isLoggedIn
    } }>
      <MainHeader onLogout={ logoutFn } />
      <main>
        { !isLoggedIn && <Login onLogin={ loginFn } /> }
        { isLoggedIn && <Home onLogout={ logoutFn } /> }
      </main>
    </AuthContext.Provider>
  );
}

export default App;
