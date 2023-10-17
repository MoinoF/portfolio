import React from 'react'
import styles from './Subtitle.module.css'
import {ToogleContext} from "../ToogleContext/ToogleContext";


const Subtitle = ({subtitle, color, size}) => {

  const css = {
    color: color,
    size: size
  }

  const { toogle } = React.useContext(ToogleContext);


  return (
    <h2 style={css} className={`${styles.subtitle} ${!toogle ? styles.dark : styles.light}`}>{subtitle}</h2>
  )
}

export default Subtitle