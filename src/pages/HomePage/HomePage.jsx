import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors"



const HomePage = () => {
  const userData = useSelector(selectUserData)
  const isSignedIn = useSelector(selectIsLoggedIn)
  return (
    <div>
      {isSignedIn ? <h1>Welcome, {userData.name}!</h1> : <h1>Welcome!</h1>}
    </div>
  )
}

export default HomePage
