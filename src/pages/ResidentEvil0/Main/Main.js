import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import LogoIMG from "../../../images/Resident0/firstView-title-global.png";
import styles from "./Main.module.scss";

import Rebecca from "../../ResidentEvil0/Main/Rebecca/Rebecca"
import { InfoRebecca } from "../../Home/DataGames/Resident0/RebeccaData";

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.main} id="home">
      <div data-aos="fade" className={styles.main_bg}>
        <Rebecca {...InfoRebecca} />
      </div>
      <audio
       src={Audio}
       autoPlay={true}
       ></audio>
      <div data-aos="fade" className={styles.main_content}>
        <img src={LogoIMG} 
        alt="Logo" />
        <h4>©2022 Capcom Co.,Ltd. All rights reserved. Feito por Fã</h4>
        <h5>PS4, &nbsp;PS5,&nbsp;  Xbox,&nbsp; Xbox Series,&nbsp; PC</h5>
      </div>      
    </div>
  );
};

export default Main;
