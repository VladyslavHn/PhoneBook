import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const AuthNav = () => {
  return (
    <div className={css.link}>
      <NavLink to="/register" >
        <Button variant="outlined">
        <HowToRegIcon color="primary" style={{ marginRight: '5' }}/>
        Registration
        </Button>
        
      </NavLink>
      <NavLink to="/login" >
        <Button variant='outlined'>
          <LoginIcon color="primary" style={{ marginRight: '5' }}/>
          LogIn
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;