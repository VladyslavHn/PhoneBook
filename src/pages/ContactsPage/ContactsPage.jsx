import { useEffect } from "react";
import ContactForm from "../../components/contactForm/contactForm"
import ContactList from "../../components/contactList/contactList"
import SearchBox from "../../components/searchBox/searchBox"
import { apiGetContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";


const ContactsPage = () => {

    const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>error</h2>}
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList />
    </div>
  )
}

export default ContactsPage
