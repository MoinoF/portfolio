import React from "react";
import styles from "./Button.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";

const Button = ({ name }) => {
  const { toogle } = React.useContext(ToogleContext);
  return (
    <button
      className={`${styles.button} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
