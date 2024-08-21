import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = ({ contacts, deleteContact }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteContact(id);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="navbar">PhoneBook</div>
      <div className="home-container">
        <div className="flexButton">
          <h1 className="home-title">Contacts</h1>
          <button
            className="add-contact-button"
            onClick={() => navigate("/create")}
          >
            Add Contact
          </button>
        </div>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.lastname}</td>
                <td>{contact.address}</td>
                <td>{contact.city}</td>
                <td>{contact.country}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>

                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
