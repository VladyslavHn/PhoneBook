import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/slice';
import { TextField } from '@mui/material';


const SearchBox = () => {

    const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => dispatch(filterContacts(e.target.value));

  return (
    <div style={{marginBottom: '20px', marginTop: '20px'}}>
      
      <TextField
        label="Find contacts by name"
        variant="outlined"
        onChange={handleFilterChange}
        value={filter}
        style={{ width: '332px' }} />
    </div>
  )
}

export default SearchBox
