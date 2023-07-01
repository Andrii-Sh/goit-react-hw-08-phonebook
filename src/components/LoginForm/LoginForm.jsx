import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Welcome!');
      form.reset();
    } catch (error) {
      toast.error('Error logIn!');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        ml: 2,
        display: 'flex',
        gap: 2,
        flexDirection: 'column',
      }}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Typography variant="h5" component="p">
        Log In
      </Typography>
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        type="email"
        name="email"
        size="small"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{
          width: 120,
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
