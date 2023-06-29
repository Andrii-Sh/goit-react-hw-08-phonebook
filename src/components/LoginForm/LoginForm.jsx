import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
// import css from './RegisterForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Welcome!');
      form.reset();
    } catch (error) {}
    toast.error('Error logIn!');
  };

  return (
    <form onSubmit={handleSubmit}>
      Log In
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
