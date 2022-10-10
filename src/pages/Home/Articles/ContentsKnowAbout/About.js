/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className={styles.know_about}>
      <div className={styles.inner}>        
          <div className={styles.about_left}>
            <Fade bottom duration={2200}>
              <h3>HISTORY</h3>
            </Fade>
            <Fade bottom duration={2400}>
            <p>            
              Capcom released Resident Evil in 1996            
              <br>
              </br>           
              and forever defined the world of survival horror.           
            </p>
            </Fade>
            <Fade bottom duration={2900}>
              <a className={styles.btn} alt="btn">More</a>
            </Fade>
          </div>        
      </div>
    </div>
  )
}

export default About