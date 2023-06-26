import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container, Title, Subtitle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      <ContactList />
    </Container>
  );
};

export default Contacts;
