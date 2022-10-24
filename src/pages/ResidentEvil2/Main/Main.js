import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import LogoIMG from "../../../images/Resident2Images/logo.png";
import styles from "./Main.module.scss";
import Audio from "../../../audios/Resident Evil 2 Remake- Title Screen Voice.m4a";

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.main} id="home">
      <div data-aos="fade" className={styles.main_bg}>       
      </div>
      <audio
       src={Audio}
       autoPlay={true}
       ></audio>
      <div data-aos="fade" className={styles.main_content}>
        <div className={styles.logo}>
          <img src={LogoIMG} 
          alt="Logo" />
        </div>
        <h3>Available Now</h3>
        <h4>©2022 Capcom Co.,Ltd. All rights reserved. Feito por Fã</h4>
        <h5>PS4, &nbsp;PS5,&nbsp;  Xbox,&nbsp; Xbox Series,&nbsp; PC</h5>
      </div>
    </div>
  );
};

export default Main;
