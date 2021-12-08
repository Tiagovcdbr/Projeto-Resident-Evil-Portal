import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./MrX.module.scss";

const MrX = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.mrx} id="mrx">
      <div className={styles.mrx_container}>
        <div data-aos="fade-right" className={styles.mrx_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.mrx_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default MrX;
