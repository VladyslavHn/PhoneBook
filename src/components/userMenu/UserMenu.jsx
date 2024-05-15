import { useDispatch, useSelector } from 'react-redux';
import { apiLogout } from '../../redux/auth/operations';
import { selectUserData } from '../../redux/auth/selectors';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  
  return (
    <div className={css.userMenu}>
      <div className={css.flexSpacer} />
      <div className={css.menuItem}>
        <p className={css.welcome}>Welcome, {user.name}</p>
        <Button
          className={css.btn}
          size="small"
          variant="outlined"
          type="button"
          onClick={() => dispatch(apiLogout())}
        >
          <ExitToAppIcon color="primary" fontSize='small' style={{ marginRight: '5px' }} />
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default UserMenu;
