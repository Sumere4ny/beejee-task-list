import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navigation__bar">
      <Link className="navigation__link" to="/">Задачи</Link>
      {/* <Link className="navigation__link" to="/create">Создать задачу</Link> */}
      <Link className="navigation__link" to="/login">Войти</Link>
    </nav>
);

export default NavBar;
