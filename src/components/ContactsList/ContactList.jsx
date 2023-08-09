import { nanoid } from '@reduxjs/toolkit';
import css from './ContactList.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/phonebookSlice';
import { GetContacts, GetFilter } from 'Redux/selectors';



function ContactList () {
  const contacts = GetContacts();
  const filter = GetFilter();

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const contactsAfterDelete = contacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deleteContact(contactsAfterDelete));
  };

    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
  
    const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id = nanoid(), name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
          <button className={css.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;