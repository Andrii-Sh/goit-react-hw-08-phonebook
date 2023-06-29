import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Navigation = () => {
  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <NavLink to="/">
          <Button variant="contained">Home</Button>
        </NavLink>

        <NavLink to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      </Stack>
    </nav>
  );
};
