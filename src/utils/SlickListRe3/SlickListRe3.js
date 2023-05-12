/* eslint-disable jsx-a11y/anchor-is-valid */

import { Swiper, SwiperSlide, } from "swiper/react/swiper-react.js";
import { Scrollbar, Pagination } from 'swiper';

import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import Fade from 'react-reveal/Fade';

import styles from '../SlickListRe3/SlickListRe3.module.scss'

import IMG from '../../images/Resident3Remake/art_img16.jpg'
import IMG2 from '../../images/Resident3Remake/art_img17.jpg'
import IMG3 from '../../images/Resident3Remake/art_img18.jpg'
import IMG4 from '../../images/Resident3Remake/art_img19.jpg'
import IMG5 from '../../images/Resident3Remake/art_img20.jpg'
import IMG6 from '../../images/Resident3Remake/art_img11.jpg'
import IMG7 from '../../images/Resident3Remake/art_img12.jpg'
import IMG8 from '../../images/Resident3Remake/art_img13.jpg'
import IMG9 from '../../images/Resident3Remake/art_img14.jpg'
import IMG10 from '../../images/Resident3Remake/art_img15.jpg'
import IMG11 from '../../images/Resident3Remake/art_img01.jpg'
import IMG12 from '../../images/Resident3Remake/art_img02.jpg'
import IMG13 from '../../images/Resident3Remake/art_img03.jpg'
import IMG14 from '../../images/Resident3Remake/art_img04.jpg'
import IMG15 from '../../images/Resident3Remake/art_img05.jpg'
import IMG16 from '../../images/Resident3Remake/art_img06.jpg'
import IMG17 from '../../images/Resident3Remake/art_img07.jpg'
import IMG18 from '../../images/Resident3Remake/art_img08.jpg'
import IMG19 from '../../images/Resident3Remake/art_img09.jpg'
import IMG20 from '../../images/Resident3Remake/art_img10.jpg'


export default function SlickListRe3 () {
  return (
    <div className={styles.container} id="news">
      <Swiper
      modules={[ Scrollbar, Pagination ]}
        navigation={true}
        keyboard={true}
        loop={true}
        spaceBetween={120}
        slidesPerView={1}
        centeredSlides={true}
        pagination={true}
        arrows={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        
        className={styles.myswiper}
      >
      <Fade duration={2200}>
        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG} alt="" />
          </a>          
        </SwiperSlide>        

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG2} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG3} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG4} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG5} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG6} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG7} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG8} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG9} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG10} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG11} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG12} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG13} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG14} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG15} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG16} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG17} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG18} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG19} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a rel="noreferrer">
            <img src={IMG20} alt="" />
          </a>        
        </SwiperSlide>
      </Fade>
      </Swiper>
    </div>
  )
}