import React, { useEffect } from 'react'

import styles from "./ScrollButton.module.scss";
import "aos/dist/aos.css";
import Aos from 'aos';

import ArrowIMG from "../../../images/Resident0/scroll-arrow.png"

const ScrollButton = () => {
    useEffect(() => {
        Aos.init({duration: 2.8,
            infinite: true,
        });
    }, []);

  return (
    <div data-aos="fade-down" className={styles.button}>
        SCROLL
        <img src={ ArrowIMG} alt="Arrow" />
    </div>
  )
}

export default ScrollButton;