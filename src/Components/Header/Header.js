import React from "react";
import styles from "./Header.module.css";
import MenuButton from "../MenuButton/MenuButton";
import Toogle from "../Toogle/Toogle";
import Menu from "../Menu/Menu";
import {ToogleContext} from "../ToogleContext/ToogleContext";
import Logo from "../Logo/Logo";

const Header = () => {
  const { toogle, setToogle, menuActive, setMenuActive } = React.useContext(ToogleContext);

  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    function listenLocalStorage() {
      const local = JSON.parse(window.localStorage.getItem("toogle"));
      if (local === null) {
        setToogle(false);
      } else {
        setToogle(local);
      }
    }

    listenLocalStorage();
  }, [setToogle]);

  function handleClick() {
    setMenuActive(!menuActive);

  }

  function handleToogle() {
    setToogle(!toogle);
    localStorage.setItem("toogle", JSON.stringify(!toogle));
  }

  React.useEffect(() => {

    setMenuActive(false)

  }, [setMenuActive])

  return (
    <div
      className={`${styles.home} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
    >
      <div className={styles.container}>
        <div className={styles.head}>
          <button onClick={handleClick} title="menu" className={styles.button}>
            <MenuButton toogle={toogle} />
          </button>
          <button className={styles.toogleButton} onClick={handleToogle}>
            <Toogle toogle={toogle} />
          </button>
        </div>
        {menuActive && <Menu toogle={toogle} />}
        {menuActive && (
          <h2
            title="close"
            onClick={handleClick}
            className={`${styles.close} animeTop`}
          >
            X
          </h2>
        )}
        <h1 className={styles.name}>Scogo</h1>
        <div className={styles.log}>
          <Logo />
        </div>

      </div>
    </div>
  );
};

export default Header;
