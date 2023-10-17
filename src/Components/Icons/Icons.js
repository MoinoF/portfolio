import React from "react";
import styles from "./Icons.module.css";
import TelephoneSvg from "../../assets/icons/TelephoneSvg";
import EmailSvg from "../../assets/icons/EmailSvg";
import FacebookSvg from "../../assets/icons/FacebookSvg";

const Icons = () => {
  const color = "#ddd";
  const size = "20";

  return (
    <ul className={styles.icons}>
      <li className={styles.icon}>
        <TelephoneSvg color={color} size={size} />
      </li>
      <li className={styles.icon}>
        <FacebookSvg color={color} size={size} />
      </li>
      <li className={styles.icon}>
        <EmailSvg color={color} size={size} />
      </li>
    </ul>
  );
};

export default Icons;
