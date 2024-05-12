import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiLogin } from "../../redux/auth/operations";


const initialValues = {
  email: "",
  password: "",
}
  
 const loginUserSchema = Yup.object().shape({
   email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').email('You must enter a valid email address').required('Email is required'),
   password: Yup.string().min(8, 'Too short!').max(50, 'Too long!').required('Password is required'),
 });
  
 

const LoginForm = () => {

  const dispatch = useDispatch();
  
    const handleSubmit = (values, { resetForm }) => {
      dispatch(apiLogin(values));
    resetForm();
  }

  return (
     <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginUserSchema}>
      <Form >
        <div>
        <label >
          <span>Email</span>
          <br/>
          <Field type='email' name='email' />
          <ErrorMessage component='p' name="email"/>
          </label>
          </div>
        <br />
        <div>
        <label >
          <span>Password</span>
          <br/>
          <Field type='password' name='password' />
          <ErrorMessage component='p' name="password"/>
          </label>
          </div>
        <br/>
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}

export default LoginForm 