import React, { Component } from "react";
import "../styles/input.css";

export default class Input extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target;
    this.props.onChange({ value, name });
  };
  render() {
    const { labelName, value, id, type, name, pattern, title } = this.props;
    return (
      <label className="label" htmlFor={id}>
        {labelName}
        <input
          className="input"
          value={value}
          onChange={this.handleChange}
          id={id}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required
        />
      </label>
    );
  }
}
