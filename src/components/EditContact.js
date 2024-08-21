import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditContact.css";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [emails, setEmails] = useState([""]);
  const [name, setName] = useState("");

  const [numbers, setNumbers] = useState([""]);

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === parseInt(id));
    if (contact) {
      setName(contact.name);

      setLastname(contact.lastname);
      setCountry(contact.country);
      setCity(contact.city);
      setEmails(contact.email || [""]);
      setNumbers(contact.number || [""]);
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      id: parseInt(id),
      name,
      lastname,
      country,
      city,
      email: emails,
      number: numbers,
    };
    updateContact(updatedContact);
    navigate("/");
  };

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const addNumberField = () => {
    setNumbers([...numbers, ""]);
  };

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  return (
    <>
      <div className="navbar">PhoneBook</div>
      <div className="edit-contact-container">
        <h1 className="edit-contact-title">Edit Contact</h1>
        <form className="edit-contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          {emails.map((email, index) => (
            <div key={index} className="form-group">
              <label htmlFor={`email-${index}`}>Email:</label>
              <input
                id={`email-${index}`}
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addEmailField}>
            Add Email
          </button>

          {numbers.map((number, index) => (
            <div key={index} className="form-group">
              <label htmlFor={`number-${index}`}>Number:</label>
              <input
                id={`number-${index}`}
                type="text"
                value={number}
                onChange={(e) => handleNumberChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addNumberField}>
            Add Number
          </button>

          <button className="submit-button" type="submit">
            Save Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default EditContact;
