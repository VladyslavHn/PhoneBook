import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import css from "./HomePage.module.css"; 

const HomePage = () => {
  const userData = useSelector(selectUserData);
  const isSignedIn = useSelector(selectIsLoggedIn);
  
  return (
    <div>
      {isSignedIn ? (
        <h1 className={css.welcome}>{`Welcome, ${userData.name}!`}</h1>
      ) : (
        <h1 className={css.welcome}>Welcome to the Phonebook app!</h1>
      )}
    </div>
  );
};

export default HomePage;

