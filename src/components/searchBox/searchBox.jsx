import { useDispatch, useSelector } from 'react-redux';
import css from './searchBox.module.css';
import { selectFilter } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/slice';


const SearchBox = () => {

    const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => dispatch(filterContacts(e.target.value));

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.inputFilter} type="text" value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default SearchBox
