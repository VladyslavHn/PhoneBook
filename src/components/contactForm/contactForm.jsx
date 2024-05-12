import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import css from './contactForm.module.css';
import { useDispatch } from "react-redux";
import { apiAddContact } from "../../redux/contacts/operations";

const initialValues = {
    name: "",
    number: "",
}
  
 const contactsSchema = Yup.object().shape({
    name: Yup.string().min(3,'Too short!').max(50,'Too long!').required('Name is required'),
    number: Yup.string().matches(/^\d+$/, 'Number must contain only digits').min(3, 'Too short!').max(50, 'Too long!').required('Number is required'),
  });

const ContactForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiAddContact(values));
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactsSchema}>
      <Form className={css.formBox}>
        <div className={css.inputForm}>
        <label className={css.labelText}>
          <span>Name</span>
          <br/>
          <Field type='text' name='name' />
          <ErrorMessage component='p' name="name"/>
          </label>
          </div>
        <br />
        <div className={css.inputForm}>
        <label className={css.labelText}>
          <span>Number</span>
          <br/>
          <Field type='text' name='number' />
          <ErrorMessage component='p' name="number"/>
          </label>
          </div>
        <br/>
        <button className={css.btn} type='submit'>Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
