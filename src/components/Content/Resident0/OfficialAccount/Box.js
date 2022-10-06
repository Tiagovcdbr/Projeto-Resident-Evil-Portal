import React from 'react'

import styles from '../OfficialAccount//Box.module.scss';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import YoutubeIMG from '../../../../images/Resident0/icons/yt_icon.png'
import TwitterIMG from '../../../../images/Resident0/icons/tw_icon.png'
import FacebookIMG from '../../../../images/Resident0/icons/fb_icon.png'
import InstagramIMG from '../../../../images/Resident0/icons/insta_icon.png'

function Box() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []); 

  return (
    <div data-aos="fade" id='sns' className={styles.box}>
      <div className={styles.box_inner}>
        <p className={styles.list_ttl}>OFFICIAL ACCOUNT</p>
        <ul className={styles.sns_list}>
          <li>
            <a href="https://www.youtube.com/user/ResidentEvil" target="_blank" rel="noreferrer">
              <img src={YoutubeIMG} alt="Youtube img" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/RE_games" target="_blank" rel="noreferrer">
              <img src={TwitterIMG} alt="Youtube img" />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/residentevil" target="_blank" rel="noreferrer">
              <img src={FacebookIMG} alt="Youtube img" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/re_games/" target="_blank" rel="noreferrer">
              <img src={InstagramIMG} alt="Youtube img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Box;