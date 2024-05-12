import { useState } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { apiLogin } from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';

const initialValues = {
  email: '',
  password: '',
};

const loginUserSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').email('You must enter a valid email address').required('Email is required'),
  password: Yup.string().min(8, 'Too short!').max(50, 'Too long!').required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    loginUserSchema.validate(values, { abortEarly: false })
      .then(() => {
        dispatch(apiLogin(values));
        setValues(initialValues);
        setErrors({});
        setSubmitted(false); 
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <br />
          <TextField
            style={{ width: '300px' }}
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={submitted && Boolean(errors.email)} 
            helperText={submitted && errors.email} 
          />
        </label>
      </div>
      <br />
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <br />
          <TextField
            style={{ width: '300px' }}
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={submitted && Boolean(errors.password)} 
            helperText={submitted && errors.password} 
          />
        </label>
      </div>
      <br />
      <Button className={css.btn} variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
