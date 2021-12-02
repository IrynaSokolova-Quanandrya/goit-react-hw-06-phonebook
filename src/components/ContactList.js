/** @format */

import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/button.module.css";
import s from "../styles/contactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={styles.btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
