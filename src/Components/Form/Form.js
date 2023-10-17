import React from "react";
import styles from "./Form.module.css";
import Input from "./Input";
import Button from "./Button";
import { ToogleContext } from "../ToogleContext/ToogleContext";
import Error from "../Feadback/Error";

const Form = () => {


  const {error, setError} = React.useContext(ToogleContext)

  const [mobile, setMobile] = React.useState(null);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [message, setMessage] = React.useState('');

  const { matches } = matchMedia("(max-width: 840px)");

  React.useEffect(() => {
    function windowResize() {
      setMobile(matches);
    }
    windowResize();
    const wresize = window.addEventListener("resize", windowResize);
    window.removeEventListener("resize", wresize);
  }, [matches]);

  const wresiz = window.addEventListener("resize", () => {
    setMobile(matches);
  });

  window.removeEventListener("resize", wresiz);

  function handleSubmit(event) {
    event.preventDefault()

    if (name !== '' && email !== '' && contact !== '' && message !== '') {
      const body = {
        name: name,
        email: email,
        contact: contact,
        message: message
      }

      console.log(body);
    } else {
      setError(true)
    }

  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${mobile && styles.mobile}`}>
      <Input placeholder="Name" name="name" type="text" onChange={({target}) => {
        setName(target.value)
        setError(false)
      }}
      value={name}
      />
      <Input placeholder="Email" name="email" type="email" onChange={({target}) => {
        setEmail(target.value)
        setError(false)
      }} 
      value={email}
      />
      <Input placeholder="Contact" name="contact" type="text" onChange={({target}) => {
        setContact(target.value)
        setError(false)
      }}
      value={contact}
      />
      <Input placeholder="message" name="message" type="text" onChange={({target}) => {
        setMessage(target.value)
        setError(false)
      }}
      value={message}
      
      />

      {
        error &&
        <Error error='Erro! Preencha todos os campos' />
      }

      <div className={styles.button}>
        <Button name="send" />
      </div>
    </form>
  );
};

export default Form;
