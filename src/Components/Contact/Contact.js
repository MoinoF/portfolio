import React from "react";
import styles from "./Contact.module.css";
import {ToogleContext} from "../ToogleContext/ToogleContext";
import Icons from "../Icons/Icons";
import Form from "../Form/Form";
import Title from "../Title/Title";

const Contact = () => {
  const { toogle, setToogle } = React.useContext(ToogleContext);

  



  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle');
    
    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])


  return (
    <div
      className={`${styles.contact} ${!toogle && styles.dark} ${
        toogle && styles.light
      }`}
    >
      <div className={styles.container}>
        <Title title="Contacto" />
        <div className={`${styles.content}`}>
          <div className={styles.icons}>
            <Icons />
          </div>
          <span
            className={`${styles.ret} ${!toogle && styles.dark_ret} ${
              toogle && styles.light_ret
            }`}
          ></span>
          <div className={styles.message}>
            <h2
              className={`${styles.subtitle} ${
                !toogle && styles.dark_subtitle
              } ${toogle && styles.light_subtitle}`}
            >
              Send Message
            </h2>
            <div className={styles.form}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
