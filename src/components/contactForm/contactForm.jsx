import { useState } from 'react';
import * as Yup from 'yup';
import css from './contactForm.module.css';
import { useDispatch } from 'react-redux';
import { apiAddContact } from '../../redux/contacts/operations';
import { TextField, Button } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Name is required'),
  number: Yup.string().matches(/^\d+$/, 'Number must contain only digits').min(3, 'Too short!').max(50, 'Too long!').required('Number is required'),
});

const ContactForm = () => {
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
    contactsSchema.validate(values, { abortEarly: false })
      .then(() => {
        dispatch(apiAddContact(values));
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
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={submitted && Boolean(errors.name)} 
            helperText={submitted && errors.name} 
          />
        </label>
      </div>
      <br />
      <div className={css.inputForm}>
        <label className={css.labelText}>
          <br />
          <TextField
            style={{ width: '300px' }}
            label="Number"
            variant="outlined"
            type="text"
            name="number"
            value={values.number}
            onChange={handleChange}
            error={submitted && Boolean(errors.number)} 
            helperText={submitted && errors.number} 
          />
        </label>
      </div>
      <br />
      <Button className={css.btn} variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
