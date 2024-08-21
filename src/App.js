import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';


const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
      <Routes>
        <Route path="/" element={<Home contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/create" element={<CreateContact addContact={addContact} />} />
        <Route path="/edit/:id" element={<EditContact contacts={contacts} updateContact={updateContact} />} />
      </Routes>
  );
};

export default App;
