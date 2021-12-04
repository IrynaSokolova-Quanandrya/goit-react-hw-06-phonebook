/** @format */

import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../redax/actions";

// import PropTypes from "prop-types";
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
// ContactList.prototype = {
//   contacts: PropTypes.object.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
// const getFilterSearch = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phonebook;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
