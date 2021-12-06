/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redax/selectors";
import s from "../styles/form.module.css";
import styles from "../styles/input.module.css";
import style from "../styles/button.module.css";
import { nanoid } from "nanoid";
import phonebookActions from "../redax/actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(phonebookActions.addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nanoid()}>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          id={nanoid()}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label} htmlFor={nanoid()}>
        Number
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          id={nanoid()}
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
