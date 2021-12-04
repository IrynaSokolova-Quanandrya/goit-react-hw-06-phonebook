/** @format */

import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../redax/actions";
import PropTypes from "prop-types";
import s from "../styles/input.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={value}
        onChange={onChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}
// Filter.prototype = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
const mapStateToProps = (state) => ({
  state: state.phonebook.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(phonebookActions.getFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
