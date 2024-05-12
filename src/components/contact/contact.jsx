import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import css from './contact.module.css';
import { useDispatch } from 'react-redux';
import { apiDeleteContact } from '../../redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteContact(contact.id));
  return (
    <div className={css.contactBox}>
      <div>
        <p>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {contact.name}
        </p>
        <p>
          <span className={css.icon}>
            <FaPhone />
          </span>
          <a href={`tel:${contact.number}`} className={css.link}>{contact.number}</a>
        </p>
      </div>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default Contact
