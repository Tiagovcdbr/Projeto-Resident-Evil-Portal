import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Sherry.module.scss";

const Sherry = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.sherry} id="sherry">
      <div className={styles.sherry_container}>
        <div data-aos="fade-right" className={styles.sherry_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.sherry_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Sherry;
