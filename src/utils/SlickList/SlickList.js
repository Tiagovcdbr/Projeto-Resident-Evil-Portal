
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
    <div className={styles.container}>
      <Swiper
      modules={[ Scrollbar, Pagination ]}
        navigation={true}
        autoplay={{ delay: 5000 }}
        keyboard={true}
        spaceBetween={1}
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
          <a href="https://www.residentevil.com/re4/en-us/" target='_blank' rel="noreferrer">
          <Fade duration={2000}>
            <img src={IMG} alt="" />
          </Fade>
          </a>
        </SwiperSlide>
        

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/switch/cloud/en-us/" target='_blank' rel="noreferrer">
            <img src={IMG2} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/village/ge/" target='_blank' rel="noreferrer">
            <img src={IMG3} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/village/us/" target='_blank' rel="noreferrer">
            <img src={IMG4} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/village/us/" target='_blank' rel="noreferrer">
            <img src={IMG5} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/village/us/" target='_blank' rel="noreferrer">
            <img src={IMG6} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.residentevil.com/village/us/" target='_blank' rel="noreferrer">
            <img src={IMG7} alt="" />
          </a>        
        </SwiperSlide>
      </Fade>
      </Swiper>
    </div>
  )
}