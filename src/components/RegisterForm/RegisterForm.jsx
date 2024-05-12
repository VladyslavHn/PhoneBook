import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiRegister } from "../../redux/auth/operations";


const initialValues = {
  name: "",
  email: "",
  password: "",
}
  
 const RegisterUserSchema = Yup.object().shape({
    name: Yup.string().min(3,'Too short!').max(50,'Too long!').required('Name is required'),
   email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').email('You must enter a valid email address').required('Email is required'),
   password: Yup.string().min(8, 'Too short!').max(50, 'Too long!').required('Password is required'),
 });
  
 

const RegistrationForm = () => {

  const dispatch = useDispatch();
  
    const handleSubmit = (value,{ resetForm }) => {
    dispatch(apiRegister(value));
    resetForm();
  }

  return (
     <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterUserSchema}>
      <Form >
        <h2>Register User</h2>
        <div >
        <label>
          <span>Name</span>
          <br/>
          <Field type='text' name='name' />
          <ErrorMessage component='p' name="name"/>
          </label>
          </div>
        <br />
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
        <button type='submit'>Add User</button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm