import React from "react";
import styles from "./Input.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";

const Input = ({ placeholder, value, name, type, onChange }) => {
  const { toogle } = React.useContext(ToogleContext);

  return (
    <input
      className={`${styles.input} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
