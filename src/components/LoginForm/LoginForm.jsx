import { useDispatch } from 'react-redux';
// import { login } from 'redux/auth/authOperations';
// import css from './RegisterForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   login({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      Log In
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
