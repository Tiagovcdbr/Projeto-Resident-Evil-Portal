import Aos from 'aos'
import React from 'react'
import styles from "./Chris.module.scss";

import { useEffect } from 'react';

const Chris = ({ image, alt }) => {
  useEffect(() => {
      Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.chris} id="chris">
      <div className={styles.chris_container}>
        <div data-aos="fade-right" className={styles.chris_container_left}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Chris;