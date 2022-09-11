import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Leon.module.scss";

const Leon = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.leon} id="leon">
      <div className={styles.leon_container}>
        <div data-aos="fade-right" className={styles.leon_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.leon_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Leon;
