import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
      <NavLink to="/register">
        <Button variant="contained">Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="contained">Log In</Button>
      </NavLink>
    </Stack>
  );
};
