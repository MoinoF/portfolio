import React from "react";
import styles from "./Title.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";

const Title = ({ title, color }) => {
  const { toogle } = React.useContext(ToogleContext);
  return (
    <div className={styles.title}>
      <span className={styles.ret}></span>
      <h1 
        style={{color}}
        className={`${styles.titleValue} ${!toogle ? styles.dark : styles.light}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
