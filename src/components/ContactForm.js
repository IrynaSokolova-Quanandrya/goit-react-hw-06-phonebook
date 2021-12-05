/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import s from "../styles/form.module.css";
import style from "../styles/button.module.css";
import Input from "../components/Input";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import phonebookActions from "../redax/actions";

export default function ContactForm() {
  const inputId = nanoid();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(phonebookActions.addContact({ name, number }));
    // onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    console.log({ name });
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        labelName="Name"
        value={name}
        onChange={handleChange}
        type="text"
        id={inputId}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Input
        labelName="Number"
        value={number}
        onChange={handleChange}
        type="tel"
        id={inputId}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(phonebookActions.addContact({ name, number })),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
