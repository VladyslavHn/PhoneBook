import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);



  return (
    <nav className={css.nav}>
      <NavLink to="/" >
        
        <Button variant="outlined">
          <HomeIcon color="primary" style={{ marginRight: '5' }}/>
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts">
            <Button variant="outlined">
              <ContactPhoneIcon color="primary" style={{ marginRight: '5' }}/>
              Contacts
            </Button>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
