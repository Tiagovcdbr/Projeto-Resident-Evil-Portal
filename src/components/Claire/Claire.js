import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Claire.module.scss";

const Claire = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.claire} id="claire">
      <div className={styles.claire_container}>
        <div data-aos="fade-right" className={styles.claire_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.claire_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Claire;
