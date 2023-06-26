import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import {  } from "../UserMenu/UserMenu";
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
