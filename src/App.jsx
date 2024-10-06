import { useEffect, useState } from 'react';

import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

import INITIAL_CONTACTS from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('storage-contacts')) ??
      INITIAL_CONTACTS
    );
  });

  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('storage-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const searchedContacts = contacts.filter(
    user =>
      user.name.toLowerCase().includes(searchedValue.toLowerCase().trim()) ||
      user.number.includes(searchedValue.trim())
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = clickedContactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== clickedContactId);
    });
  };

  return (
    <>
      <Section>
        <h1 className="h1_title">Phonebook</h1>

        <div className="wrapper">
          <ContactForm onAddContact={addContact} />

          {contacts.length !== 0 && (
            <SearchBox value={searchedValue} onSearch={setSearchedValue} />
          )}
        </div>

        <ContactList contacts={searchedContacts} onDelete={deleteContact} />
      </Section>
    </>
  );
}

export default App;
