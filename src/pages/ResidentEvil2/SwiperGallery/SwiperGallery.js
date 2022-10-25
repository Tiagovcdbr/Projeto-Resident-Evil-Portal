/* eslint-disable jsx-a11y/iframe-has-title */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SlideIMG1 from '../../../images/Resident2Images/claire-bg2.jpg'

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]);
const SwiperGalley = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        keyboard={true}
        slidesPerView={1}
        allowfullscreen
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className="mySwiper swiper"
        id="videos"
      >
        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <iframe
            img src={SlideIMG1} alt="image1"
            className="iframe"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperGalley;
