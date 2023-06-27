import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const email = useSelector(authSelectors.getEmail);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logOut())}></button>
    </div>
  );
};

//  <button type="button" onClick={() => dispatch(logOut())}></button>
