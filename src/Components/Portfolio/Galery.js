import React from 'react'
import styles from './Galery.module.css'
import {ToogleContext} from '../ToogleContext/ToogleContext'
import Img_1 from '../../assets/img/galery/img_1.jpg'
import Img_2 from '../../assets/img/galery/img_2.jpg'
import Img_3 from '../../assets/img/galery/img_3.jpg'
import Img_4 from '../../assets/img/galery/img_4.jpg'
import Img_5 from '../../assets/img/galery/img_5.jpg'
import Img_6 from '../../assets/img/galery/img_6.jpg'
import Img_7 from '../../assets/img/galery/img_7.jpg'
import Img_8 from '../../assets/img/galery/img_8.jpg'
import Img_9 from '../../assets/img/galery/img_9.jpg'
import Img_10 from '../../assets/img/galery/img_10.jpg'
import Img_11 from '../../assets/img/galery/img_11.jpg'
import Title from '../Title/Title'


const Galery = () => {

  const {toogle, setToogle} = React.useContext(ToogleContext)
  const [modal, setModal] = React.useState(false);
  const [index, setIndex] = React.useState(null)

  const imgs = [
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_5,
    Img_6,
    Img_7,
    Img_8, 
    Img_9,
    Img_10,
  ]
;

  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle')

    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])

  function close() {
    setModal(false)
  }

  return (
    <div className={`${styles.galery} ${!toogle ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title title='Portfolio' />
        </div>
       {
       modal &&

       <div className={`${styles.modalOverlay}`}>
          <span onClick={close}  className={styles.close}>X</span>
          <div className={`${styles.imgModal} photoModal`} >
            <img src={imgs[index]} alt='scogo img'></img>
          </div>

        </div>}

        <div className={styles.imgs}> 
        
          {
            imgs.map((img, index) => (
              <div onClick={() => {
                setIndex(index);
                setModal(true)
              }} key={index} className={styles.img}>
                <img key={index} src={img} alt='scogo img'></img>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Galery