import React from "react";
import styles from "./TextArea.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";

const TextArea = ({ placeholder, name }) => {
  const { toogle } = React.useContext(ToogleContext);
  return (
    <textarea
      className={`${styles.textarea} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
      name={name}
    >
      {placeholder}
    </textarea>
  );
};

export default TextArea;
