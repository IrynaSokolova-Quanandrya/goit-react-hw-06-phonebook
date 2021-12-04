/** @format */

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
// const INITIAL_CONTACTS_LIST = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
function Phonebook() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem("contacts")) ?? INITIAL_CONTACTS_LIST
  // );
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addSubmitData = ({ name, number }) => {
  //   const friendName = name;
  //   console.log(contacts);
  //   console.log(friendName);
  //   if (contacts.some(({ name }) => name === friendName)) {
  //     alert(`${name} is already in contact`);
  //     return;
  //   }
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   console.log(contact);
  //   setContacts((prev) => [...prev, contact]);
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  // const getFilterSearch = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = (nameId) => {
  //   setContacts((prev) => prev.filter((contact) => contact.id !== nameId));
  // };
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Phonebook;
