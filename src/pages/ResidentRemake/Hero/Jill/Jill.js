import Aos from 'aos'
import React from 'react'
import styles from "./Jill.module.scss";

import { useEffect } from 'react';

const Jill = ({ image, alt }) => {
  useEffect(() => {
      Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.jill} id="jill">
      <div className={styles.jill_container}>
        <div data-aos="fade-left" className={styles.jill_container_left}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Jill;