/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from '../SelectLanguage/SelectLang.module.scss';

const SelectLang = () => {

  useEffect(() => {
    Aos.init({duration: 3500});
  }, []); 

  return (
    <div data-aos="fade" className={styles.select_lang}>
      <a href=''>Select Language</a>
    </div>
  )
}

export default SelectLang