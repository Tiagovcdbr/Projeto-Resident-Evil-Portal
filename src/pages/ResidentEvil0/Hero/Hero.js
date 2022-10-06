
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import LogoIMG from "../../../images/Resident0/icons/firstView-title-global.png";
import SwitchIMG from "../../../images/Resident0/icons/switch-logo.png"
import styles from "./Hero.module.scss";

import Rebecca from "./Rebecca/Rebecca"
import { InfoRebecca } from "../../Home/DataGames/Resident0/RebeccaData";
import Billy from "./Billy/Billy";
import { InfoBilly } from "../../Home/DataGames/Resident0/BillyData";
import GlobalPlataforms from "../../../images/Resident0/icons/firstView-platforms-global.png";

import Audio from '../../../audios/Resident Evil 0 PS4 Voice Title.m4a'

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);  

  return (
    <div data-aos="fade" className={styles.main} id="home">
    <audio
      src={Audio}
      autoPlay={true}
    ></audio>
      <div data-aos="fade" className={styles.main_bg}>
        <Billy {...InfoBilly}/>
        <Rebecca {...InfoRebecca} />
      </div>
        <div data-aos="fade" className={styles.main_content}>
          <img src={LogoIMG} 
            alt="Logo"
          /> 
          <h2 className={styles.firstView_title_text}>Resident Evil 0 HD Remaster</h2>
          <div className={styles.firstView_switch}>
            <div className={styles.firstView_switch_logo}>
              <img src={SwitchIMG}
              alt="Nintendo Switch" />
            </div>
            <div className={styles.firstView_switch_info}>
              <div className={styles.firstView_switch_text}>Nintendo Switch™ version</div>
              <div className={styles.firstView_switch_date}>Available Now</div>
            </div>
          </div>
          <div className={styles.firstView_otherPlats}>
            <img src={GlobalPlataforms} alt="PS4 PS3 XBOX ONE available now" />
          </div> 
        </div>
        <div className={styles.firstView_scroll}>SCROLL</div>                    
    </div>
  );
};

export default Hero;
