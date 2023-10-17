import React from "react";
import styles from "./MenuButton.module.css";
import { ToogleContext } from "../ToogleContext/ToogleContext";

const MenuButton = ({ toogle }) => {

  const {menuActive, setMenuActive} = React.useContext(ToogleContext)

  return (
    <div className={`${styles.menu}`} title="menu">
      <span
        className={`${styles.menuLine1} ${toogle && styles.dark} ${
          !toogle && styles.light
        }`}
      ></span>
      <span
        className={`${styles.menuLine2} ${toogle && styles.dark} ${
          !toogle && styles.light
        }`}
      ></span>
      <span
        className={`${styles.menuLine3} ${toogle && styles.dark} ${
          !toogle && styles.light
        }`}
      ></span>
    </div>
  );
};

export default MenuButton;
