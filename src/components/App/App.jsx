import { useState, useEffect } from "react";
import startContacts from "../../components/contact.json";
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    const storageContact = window.localStorage.getItem("saveContact");
    return storageContact !== null ? JSON.parse(storageContact) : startContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saveContact", JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
