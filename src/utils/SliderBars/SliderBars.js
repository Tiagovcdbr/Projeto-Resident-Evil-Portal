import React from 'react'
import styles from './SliderBars.module.scss';

const SliderBars = () => {
  
  return (
    <div className={styles.slider_bars}>
      <li className={styles.bar}></li>
      <li className={styles.bar}></li>
      <li className={styles.bar}></li>
      <li className={styles.bar}></li>
    </div>
  )
}

export default SliderBars;