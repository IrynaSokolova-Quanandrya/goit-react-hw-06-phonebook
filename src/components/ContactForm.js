import React, { Component } from "react";
import "../styles/form.css";
import "../styles/button.css";
import Input from "../components/Input";
import { nanoid } from "nanoid";

export default class ContactForm extends Component {
  inputId = nanoid();
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input
          labelName="Name"
          value={name}
          onChange={this.handleChange}
          type="text"
          id={this.inputId}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <Input
          labelName="Number"
          value={number}
          onChange={this.handleChange}
          type="tel"
          id={this.inputId}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
