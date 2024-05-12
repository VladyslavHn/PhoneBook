import LoginForm from "../../components/LoginForm/LoginForm"


const LoginPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'blue'}}>
      <h2>Login</h2>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
