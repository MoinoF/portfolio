import React from "react";
import styles from "./AboutAlt.module.css";

const AboutAlt = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={styles.name}>Scogo</h1>
            <p className={styles.description}>
              O webpack é instalado com o minimo de pacotes possiveis para
              funcionar com o JavaScript. Para adicionarmos outras
              funcionalidades, como a importacao de CSS, imagens, SVG e etc.
              precisamos adicionar loaders especificos para cada situacao.
            </p>
          </div>
          <div className={styles.title}>
            <h1>Sobre</h1>
          </div>
        </div>
        <div className={styles.tree}></div>
      </div>
    </>
  );
};

export default AboutAlt;
