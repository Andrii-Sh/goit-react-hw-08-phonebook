import { selectFilter } from '../../redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { Label, Input } from './Filted.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
