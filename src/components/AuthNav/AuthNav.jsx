import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'


const AuthNav = () => {
  return (
    <div className={css.link}>
      <NavLink to="/register" >
        Registration
      </NavLink>
      <NavLink  to="/login" >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;