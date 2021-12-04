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
const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
