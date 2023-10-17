import React from "react";
import styles from "./About.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";
import Title from "../Title/Title";

function About() {
  const { toogle, setToogle, menuActive, setMenuActive } = React.useContext(ToogleContext);

  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle')

    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])


  return (
    <div
      className={`${styles.about} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
    >
      <div className={styles.container}>
        <div className={`${styles.div}`}>
          <div className={styles.title}>
            <Title title="Sobre" />
          </div>
          <div className={styles.contant}>
            <h1 className={styles.name}>Scogo</h1>
            <div className={styles.paragraph}>
              <p
                className={`${styles.paragraph1} ${
                  !toogle && styles.text_dark
                } ${toogle && styles.text_light}`}
              >
                Olá! Meu none é{" "}
                <span
                  className={`${!toogle && styles.dark_bold} ${
                    toogle && styles.light_bold
                  }`}
                >
                  <b>Scogo</b>{" "}
                </span>
                e sou um apaixonado por{" "}
                <span
                  className={`${!toogle && styles.dark_bold} ${
                    toogle && styles.light_bold
                  }`}
                >
                  <b>fotografia e desenvolvimento web.</b>
                </span>{" "}
                
              </p>

              <p
                className={`${styles.paragraph2} ${
                  !toogle && styles.text_dark
                } ${toogle && styles.text_light}`}
              >
                Combinando minha paixão pelas{" "}
                <span
                  className={`${!toogle && styles.dark_bold} ${
                    toogle && styles.light_bold
                  }`}
                >
                  <b>artes visuais e tecnologia,</b>
                </span>{" "}
                tenho trabalhado incansavelmente para criar
                <span
                  className={`${!toogle && styles.dark_bold} ${
                    toogle && styles.light_bold
                  }`}
                >
                  <b> imagens deslumbrantes e sites funcionais</b>
                </span>{" "}
                que contam histórias únicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
