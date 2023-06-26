import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contacts/selectors';
import Layout from '../../components/Layout/Layout';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { Filter } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
// import { Container, Title, Subtitle } from './App.styled';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>

    // <Container>
    //   <Title>Phonebook</Title>
    //   <ContactForm />
    //   <Subtitle>Contacts</Subtitle>
    //   <Filter />
    //   {isLoading && !error && <b>Loading contacts...</b>}
    //   <ContactList />
    // </Container>
  );
};
