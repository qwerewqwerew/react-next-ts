import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = ( props ) => {
  return (
    <header className={ classes[ 'main_header' ] }>
      <h1>회원전용페이지</h1>
      <Navigation isLoggedIn={ props.isAuthenticated } onLogout={ props.onLogout } />
    </header>
  );
};

export default MainHeader;
