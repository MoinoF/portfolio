import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Galery from '../Portfolio/Galery'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer.js/Footer'
import styles from './Home.module.css'


const Home = () => {

  const [index, setIndex] = React.useState(0)

  const pages = [
    <Header />, 
    <About />,
    <Galery />,
    <Skills />,
    <Footer />
  ]

  function handleScroll() {
    if (index < index.length) {

      setIndex(index + 1)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <>

      <div className={styles.home}>
        {pages.map((page) => (
          <div className={styles.page}>
            {page}
          </div>
        ))}
      </div>
    </>
  )
}

export default Home