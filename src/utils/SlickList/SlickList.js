/* eslint-disable jsx-a11y/anchor-is-valid */

import { Swiper, SwiperSlide, } from "swiper/react/swiper-react.js";
import { Scrollbar, Pagination } from 'swiper';

import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import Fade from 'react-reveal/Fade';

import styles from '../SlickList/SlickList.module.scss'

import IMG from '../../images/Resident3Remake/collectors_thumb_us.jpg'
import IMG2 from '../../images/Resident3Remake/news-220303.jpg'
import IMG3 from '../../images/Resident3Remake/news-220603.jpg'
import IMG4 from '../../images/Resident3Remake/news200805-dlcall.jpg'
import IMG5 from '../../images/Resident3Remake/classic_thumb.jpg'
import IMG6 from '../../images/Resident3Remake/demo_thumb.jpg'
import IMG7 from '../../images/Resident3Remake/map_thumb.jpg'


export default function SlickList () {
  return (
    <div className={styles.container} id="news">
      <Swiper
      modules={[ Scrollbar, Pagination ]}
        navigation={true}
        keyboard={true}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        centeredSlides={false}
        pagination={true}
        slidesPerGroupSkip={3}
        grabCursor={true}
        controlsProps={{
          dotsTouchable: true,
          dotsWrapperStyle: { width: 20, height: 10 },
          }}

        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1705: {
            width: 1705,
            slidesPerView: 3.5,
          }
        }}
        className={styles.myswiper}
      >
      <Fade duration={2200}>
        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG} alt="" />
            <div className={styles.text}>
              <p>Resident Evil 3 Collector's Edition</p>
            </div>
          </a>          
        </SwiperSlide>        

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG2} alt="" />
            <div className={styles.text}>
              <p>Three acclaimed titles have finally 
              arrived on next-gen consoles with upgrades!</p>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG3} alt="" />
            <div className={styles.text}>
              <p>Resident Evil 4 has been reimagined with 
              modernized gameplay, a reimagined storyline 
              and vividly detailed graphics.</p>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG4} alt="" />
            <div className={styles.text}>
              <p>In-game rewards unlock DLC for the 
              Resident Evil 3 campaign available for 
              purchase on August 6!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG5} alt="" />
            <div className={styles.text}>
              <p>The Classic Costume Pack is now 
              available, with designs based on 
              Resident Evil 3: Nemesis!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG6} alt="" />
            <div className={styles.text}>
              <p>Demo version available now!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG7} alt="" />
            <div className={styles.text}>
              <p>Learn more about the events 
              that have transpired in Raccoon City, 
              the setting for Resident Evil 3.</p>
            </div>
          </a>        
        </SwiperSlide>
      </Fade>
      </Swiper>
    </div>
  )
}