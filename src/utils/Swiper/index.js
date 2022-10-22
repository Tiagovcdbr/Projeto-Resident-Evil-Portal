
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import { Navigation, EffectFade } from 'swiper';
import "swiper/swiper-bundle.css";
import Fade from 'react-reveal/Fade';

import styles from '../Swiper/Home.module.scss';

import IMG from '../../images/Portal/bnr_re4_sc_pre_en.jpg'
import IMG2 from '../../images/Portal/bnr_ns_cloud_en.jpg'
import IMG3 from '../../images/Portal/bnr_village_ge2_en.jpg'
import IMG4 from '../../images/Portal/bg_village_2.png'

export default function Home () {
  return (
    <div className={styles.container}>
      <Swiper
      pagination={{
        type: "progressbar",
        }}
        modules={[Navigation, EffectFade]}
        progressbar={true}
        autoplay
        navigation={true}
        effect={'fade'}
        speed={1200}
        slidesPerView={1}
        loop
        className={styles.myswiper}
      >
      
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

      </Swiper>
    </div>
  )
}