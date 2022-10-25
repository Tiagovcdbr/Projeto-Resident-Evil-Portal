// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]);
const Videos = () => {
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
            src="https://www.youtube.com/embed/cLJnBjIDpa0"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/xtxJtQa6VSw"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/TuAM-b7m3iw"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/e72Qz_IjlVE"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/NE7JRamZRIc"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/jdlvKQjTuLo"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/WWTdCFmA0j8"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/6ouGEjNYLOw"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/m1cBkw7zRE4"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/DFykxpS7xVE"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Videos;
