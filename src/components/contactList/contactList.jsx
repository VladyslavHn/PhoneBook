import { useSelector } from "react-redux";
import Contact from "../contact/contact";
import css from './contactList.module.css';
import { selectFilteredContacts } from "../../redux/contacts/selectors";



const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredContacts) && filteredContacts.length === 0 && <li>You don&apos;t have any contacts yet</li>}
      {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};


export default ContactList;
