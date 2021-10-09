import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/context';

const NavBar = ({ onLogout }) => {
  const { isAuth } = useContext(AppContext);

  return (
  <nav className="navigation__bar">
  <Link className="navigation__link" to="/">Задачи</Link>
  {isAuth ? <Link className="navigation__link" onClick={onLogout} to="/">Выйти</Link>
    : <Link className="navigation__link" to="/login">Войти</Link>}
  </nav>
  );
};

export default NavBar;
