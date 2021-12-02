import React, { Component } from "react";
import "../styles/button.css";
import "../styles/contactList.css";
export default class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className="contact__list">
        {contacts.map(({ id, name, number }) => (
          <li className="contact__item" key={id}>
            {name}: {number}
            <button
              type="button"
              className="btn"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
