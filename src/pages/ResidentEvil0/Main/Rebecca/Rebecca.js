import Aos from 'aos'
import React from 'react'
import styles from "./Rebecca.module.scss";

import { useEffect } from 'react';

const Rebecca = ({ image, alt }) => {
  useEffect(() => {
      Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.rebecca} id="rebecca">
      <div className={styles.rebecca_container}>
        <div data-aos="fade-left" className={styles.rebecca_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Rebecca;