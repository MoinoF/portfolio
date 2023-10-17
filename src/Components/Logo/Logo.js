import React from "react";
import styles from "./Logo.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";

const Logo = () => {
  const { toogle } = React.useContext(ToogleContext);
  const letters = ["s", "c", "o", "g", "o"];

  const darkStyle = [
    { color: "#999999" },
    { color: "#b3b3b3" },
    { color: "#cccccc" },
    { color: "#e6e6e6" },
    { color: "#f2f2f2" },
  ];
  const lightStyle = [
    { color: "#606060" },
    { color: "#444444" },
    { color: "#2d2d2d" },
    { color: "#1a1a1a" },
    { color: "#101010" },
  ];

  return (
    <div className={styles.logo}>
      <h1>

          {
            !toogle ? 
            letters.map((item, index) => (
              <span key={index} style={darkStyle[index]} className={item}>
                {item}
              </span>
            ))
            :
            letters.map((item, index) => (
              <span key={index} style={lightStyle[index]} className={item + "_l"}>
                {item}
              </span>
            ))
          }
          
      </h1>
    </div>
  );
};

export default Logo;
