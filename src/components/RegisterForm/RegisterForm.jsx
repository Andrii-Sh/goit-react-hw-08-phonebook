import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Successfully registered!');
      form.reset();
    } catch (error) {
      toast.error('Error Registration!');
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
        Registration
      </Typography>

      <TextField
        id="name"
        label="User Name"
        variant="outlined"
        type="text"
        name="name"
        size="small"
      />

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
        Register
      </Button>
    </Box>
  );
};
