
import { Swiper, SwiperSlide, } from "swiper/react/swiper-react.js";
import { Scrollbar, Pagination } from 'swiper';

import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import Fade from 'react-reveal/Fade';

import styles from '../SlideList/SlideList.module.scss'

import IMG from '../../images/Resident3Remake/maxresdefault2.jpg'
import IMG2 from '../../images/Resident3Remake/maxresdefault3.jpg'
import IMG3 from '../../images/Resident3Remake/trailer_img02.jpg'
import IMG4 from '../../images/Resident3Remake/trailer_demo_img.jpg'
import IMG5 from '../../images/Resident3Remake/trailer_img01.jpg'
import IMG6 from '../../images/Resident3Remake/maxresdefault.jpg'

import SwiperCore, { Navigation, Autoplay, Keyboard } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]);

export default function SlideList () {
  return (
    <div className={styles.container}>
      <Swiper
      modules={[ Scrollbar, Pagination ]}
        navigation={true}
        keyboard={true}
        spaceBetween={25}
        loop={true}
        slidesPerView={2}
        slidesPerGroupSkip={2}
        centeredSlides={false}
        pagination={true}        
        grabCursor={true}
        allowfullscreen
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
          // when window width is >= 1705px
          1705: {
            width: 1705,
            slidesPerView: 2,
          }
        }}
        className={styles.myswiper}
      >
      <Fade duration={2200}>
        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/U2TGigdVVMg" target='_blank' rel="noreferrer">
            <img src={IMG} alt="" />
          </a>          
        </SwiperSlide>        

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/32LSdT0dqxc" target='_blank' rel="noreferrer">
            <img src={IMG2} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/Wghn3tYYVNw" target='_blank' rel="noreferrer">
            <img src={IMG3} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/Cy3PLj3uStk" target='_blank' rel="noreferrer">
            <img src={IMG4} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/0TN3l5BQ5E4" target='_blank' rel="noreferrer">
            <img src={IMG5} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a href="https://www.youtube.com/embed/HJWWu8h7xZU" target='_blank' rel="noreferrer">
            <img src={IMG6} alt="" />
          </a>        
        </SwiperSlide>
      </Fade>
      </Swiper>
    </div>
  )
}