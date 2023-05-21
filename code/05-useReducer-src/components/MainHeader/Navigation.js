import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">회원</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">관리자</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>로그아웃</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
