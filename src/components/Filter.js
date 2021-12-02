import React, { Component } from "react";
import "../styles/input.css";
import "../styles/button.css";

export default class Filter extends Component {
  render() {
    return (
      <label className="label filter__label">
        Find contacts by name
        <input
          className="input"
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    );
  }
}
