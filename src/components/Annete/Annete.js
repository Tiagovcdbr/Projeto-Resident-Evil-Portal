import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Annete.module.scss";

const Annete = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.annete} id="annete">
      <div className={styles.annete_container}>
        <div data-aos="fade-right" className={styles.annete_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.annete_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Annete;
