import React from 'react'
import styles from './Skills.module.css'
import Title from '../Title/Title'
import {ToogleContext} from '../ToogleContext/ToogleContext'
import Subtitle from '../Subtitle/Subtitle'
import Skill from './Skill/Skill'



const Skills = () => {

  const {toogle, setToogle} = React.useContext(ToogleContext)

  const tools = {
    dev: [
      "Html",
      "Css",
      "JavaScript",
      "Python",
      "NodeJs",
      "ReactJs",
      "ExpressJs",
      "MySql",
      "MongoDB"
    ],

    phot: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Capture One"
    ], 
    
    other: [
      "Adobe Illustrator",
      "Figma"
    ]
  }


  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle')

    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])

  return (
    <div className={`${styles.skills} ${!toogle ? styles.dark : styles.light}`}>
      <div className={styles.container}>

        <div className={styles.title}>

          <Title color={!toogle ? '#444' : '#bbb'} title='Habilidades' />
        </div>

        <div className={styles.contant}>

          <div className={styles.skill}>
            <div className={styles.subtitle}>
              <Subtitle color={!toogle ? '#bbb' : '#333'} subtitle='< Programação />' />
            </div>

            <div className={styles.skillItem}>
              
              {
                tools.dev.map((tool, index) => (
                  <Skill key={index} tool={tool} />
                ))
              }
              
            </div>


          </div>
          <div className={styles.skill}>
            <div className={styles.subtitle}>
              <Subtitle color={!toogle ? "#bbb" : "#333" } subtitle='Photografia' />
            </div>

            <div className={styles.skillItem}>

              {
                tools.phot.map((tool, index) => (
                  <Skill key={index} tool={tool} />
                ))
              }

            </div>


          </div>


          <div className={styles.skill}>
            <div className={styles.subtitle}>
              <Subtitle color={!toogle ? "#bbb" : "#333" } subtitle='Outras' />
            </div>

            <div className={styles.skillItem}>

              {
                tools.other.map((tool, index) => (
                  <Skill key={index} tool={tool} />
                ))
              }

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills