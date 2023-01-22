import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Carlos.module.scss";

const Carlos = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.carlos} id="carlos">
      <div className={styles.carlos_container}>
        <div data-aos="fade-right" className={styles.carlos_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.carlos_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Carlos;
