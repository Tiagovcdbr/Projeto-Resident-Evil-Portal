import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Jill.module.scss";

const Jill = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.jill} id="jill">
      <div className={styles.jill_container}>
        <div data-aos="fade-right" className={styles.jill_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.jill_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Jill;
