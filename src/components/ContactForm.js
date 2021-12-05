/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
// import {getContacts} from '../redax/selectors';
import s from "../styles/form.module.css";
import styles from "../styles/input.module.css";
import style from "../styles/button.module.css";
// import Input from "../components/Input";
import { nanoid } from "nanoid";
import phonebookActions from "../redax/actions";

export default function ContactForm() {
  const inputId = nanoid();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //       const { name, value } = e.target;
  //       dispatch(phonebookActions.getFilter({ value, name }))
  //       // onChange({ value, name });
  //     };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // dispatch(phonebookActions.getContacts(e.target.value))
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
    reset();
  };
  const reset = () => {
    console.log({ name });
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={inputId}>
        Name
        <input
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
      </label>
      <label className={styles.label} htmlFor={inputId}>
        Number
        <input
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
      </label>
      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
}
