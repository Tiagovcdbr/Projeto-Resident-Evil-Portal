import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Video from "../../images/video.mp4";
import LogoIMG from "../../images/logo.png";
import styles from "./Main.module.scss";

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.main} id="home">
      <div data-aos="fade" className={styles.main_bg}>
        <video
          src={Video}
          autoPlay={true}
          loop
          className={styles.video}
        ></video>
      </div>
      <div data-aos="fade" className={styles.main_content}>
        <img src={LogoIMG} alt="Logo" />
        <h4>©2021 Capcom Co.,Ltd. All rights reserved.</h4>
        <h5>PS4, &nbsp;PS5,&nbsp;  Xbox,&nbsp; Xbox Series,&nbsp; PC</h5>
      </div>
    </div>
  );
};

export default Main;
