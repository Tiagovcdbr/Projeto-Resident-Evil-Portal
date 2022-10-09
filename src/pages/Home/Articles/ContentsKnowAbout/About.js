import React from 'react'
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className={styles.know_about}>
      <div className={styles.inner}>
        <Fade bottom duration={2500}>
          <div className={styles.about_left}>
            <h3>HISTORY</h3>
            <p>
              Capcom released Resident Evil in 1996
              <br>
              </br>
              and forever defined the world of survival horror.
            </p>
            <a className={styles.btn} href="about-portal.html">More</a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About