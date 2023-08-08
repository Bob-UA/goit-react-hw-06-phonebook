import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  changeFilter,
} from 'components/phonebookSlice';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';

function App() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const dispatch = useDispatch();

  // useEffect(() => {
  // localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onHandleSubmit = data => {
    dispatch(addContact(data));
  };

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onHandleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
