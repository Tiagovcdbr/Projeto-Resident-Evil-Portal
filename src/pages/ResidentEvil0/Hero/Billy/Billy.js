import Aos from 'aos'
import React from 'react'
import styles from "./Billy.module.scss";

import { useEffect } from 'react';

const Billy = ({ image, alt }) => {
  useEffect(() => {
      Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.billy} id="billy">
      <div className={styles.billy_container}>
        <div data-aos="fade" className={styles.billy_container_left}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Billy;