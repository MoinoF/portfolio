/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from './Skill.module.css'

const Skill = ({tool}) => {
  return (
    <div className={styles.skill}>
      <span>//</span><p>{tool}</p>
    </div>
  )
}

export default Skill