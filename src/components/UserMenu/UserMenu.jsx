import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const email = useSelector(authSelectors.getEmail);
  const dispatch = useDispatch();

  return (
    <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {email}
      </Typography>
      <Button
        variant="contained"
        sx={{ ml: 0 }}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Stack>
  );
};

