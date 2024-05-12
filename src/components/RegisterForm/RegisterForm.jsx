
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { apiRegister } from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

import css from './RegisterForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterUserSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Name is required'),
  email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').email('You must enter a valid email address').required('Email is required'),
  password: Yup.string().min(8, 'Too short!').max(50, 'Too long!').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterUserSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(apiRegister(values));
      resetForm();
    },
  });

  return (
    <form className={css.formBox} onSubmit={formik.handleSubmit}>
      <h2 style={{color: 'blue'}}>Register User</h2>
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <TextField
            style={{ width: '300px' }}
            label='Name'
            type='text'
            name='name'
            variant='outlined'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={css.errorText}>{formik.errors.name}</div>
          ) : null}
        </label>
      </div>
      <br />
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <TextField
            style={{ width: '300px' }}
            label='Email'
            type='email'
            name='email'
            variant='outlined'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={css.errorText}>{formik.errors.email}</div>
          ) : null}
        </label>
      </div>
      <br />
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <TextField
            style={{ width: '300px' }}
            label='Password'
            type='password'
            name='password'
            variant='outlined'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={css.errorText}>{formik.errors.password}</div>
          ) : null}
        </label>
      </div>
      <br />
      <Button type='submit' variant='contained' className={css.btn}>
        Add User
      </Button>
    </form>
  );
};

export default RegistrationForm;

