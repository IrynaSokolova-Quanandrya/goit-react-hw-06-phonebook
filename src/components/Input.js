/** @format */

import React from "react";
import PropTypes from "prop-types";
import s from "../styles/input.module.css";

function Input({ onChange, labelName, value, id, type, name, pattern, title }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ value, name });
  };
  return (
    <label className={s.label} htmlFor={id}>
      {labelName}
      <input
        className={s.input}
        value={value}
        onChange={handleChange}
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

Input.prototype = {
  onChange: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Input;
