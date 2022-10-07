
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import { Navigation, EffectFade } from 'swiper';
import "swiper/swiper-bundle.css";

import styles from '../Swiper/Home.module.scss';
import IMG from '../../images/Portal/bnr_re4_sc_en.jpg'
import IMG2 from '../../images/Portal/bnr_ns_cloud_en.jpg'
import IMG3 from '../../images/Portal/bnr_village_ge2_en.jpg'
import IMG4 from '../../images/Portal/bg_village.jpg'

export default function Home () {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, EffectFade]}
        autoplay
        navigation={true}
        effect={'fade'}
        speed={1200}
        slidesPerView={1}
        loop
        className={styles.myswiper}
      >
      <SwiperSlide className={styles.swiperslide}>
        <img src={IMG} alt="" />
      </SwiperSlide>  
      <SwiperSlide className={styles.swiperslide_2}>
        <img src={IMG2} alt="" />
      </SwiperSlide>  
      <SwiperSlide className={styles.swiperslide_3}>
        <img src={IMG3} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide_4}>
        <img src={IMG4} alt="" />
      </SwiperSlide>   
      </Swiper>
    </div>
  )
}