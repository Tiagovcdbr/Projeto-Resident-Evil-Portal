import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Video from "../../../videos/video-portal-background.mp4";
import LogoIMG from "../../../images/ResidentRemake/icons/resident-portal.png";
import styles from "./Main.module.scss";

import Fade from 'react-reveal/Fade';

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
      <audio
       src={Audio}
       autoPlay={true}
       ></audio>
      <div className={styles.main_content}>
        <Fade left duration={1800}>
          <img src={LogoIMG} 
          alt="Logo" />
        </Fade>
        <h4>©2022 Capcom Co.,Ltd. All rights reserved. Feito por Fã</h4>
        <h5>PS4, &nbsp;PS5,&nbsp;  Xbox,&nbsp; Xbox Series,&nbsp; PC</h5>
      </div>
    </div>
  );
};

export default Main;
