import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/authSelectors';
// import {  } from "../UserMenu/UserMenu";
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
      {/* <UserMenu /> */}
    </header>
  );
};

export default AppBar;
