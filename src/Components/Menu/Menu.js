import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { ToogleContext } from "../ToogleContext/ToogleContext";

const Menu = ({ toogle }) => {
  const [horizontal, setHorizontal] = React.useState(null);

  const {menuActive, setMenuActive} = React.useContext(ToogleContext)

  const [active, setActive] = React.useState(false)

  const { matches } = matchMedia("(max-width: 720px)");

  React.useEffect(() => {
    function windowResize() {
      setHorizontal(matches);
    }
    windowResize();
    const wresize = window.addEventListener("resize", windowResize);
    window.removeEventListener("resize", wresize);
  }, [matches]);

  const wresiz = window.addEventListener("resize", () => {
    setHorizontal(matches);
  });

  window.removeEventListener("resize", wresiz);

  return (

    <>

      {
        

      <div
        className={`${styles.background} ${!toogle && styles.dark} ${
          toogle && styles.light
        } animeTop`}
      >
        <nav className={`${styles.container} ${horizontal && styles.hcontainer}`}>
          <ul
            className={`${!horizontal && styles.nav} ${
              horizontal && styles.horizontal
            }`}
          >
            <li>
              <a href="/">Home</a></li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="galery">Galery</Link>
            </li>
            <li>
              <Link to="skills">Skills</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      }
    </>
  );
};

export default Menu;
