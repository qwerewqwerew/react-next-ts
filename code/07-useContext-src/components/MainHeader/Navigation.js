import { useContext } from 'react';
import AuthContext from "../../store/auth-context";
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={ classes.nav }>
      <ul>
        { ctx.isLoggedIn && (
          <li>
            <a href="/">회원</a>
          </li>
        ) }
        { ctx.isLoggedIn && (
          <li>
            <a href="/">관리자</a>
          </li>
        ) }
        { ctx.isLoggedIn && (
          <li>
            <button onClick={ ctx.onLogout }>로그아웃</button>
          </li>
        ) }
      </ul>
    </nav>
  );

}
export default Navigation;
