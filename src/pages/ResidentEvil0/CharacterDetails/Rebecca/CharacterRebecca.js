import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./CharacterRebecca.module.scss";

const CharacterRebecca = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 2500});
  }, []);

  return (
    <div className={styles.rebecca} id="rebecca">
      <div className={styles.rebecca_container}>
        <div data-aos="fade-right" className={styles.rebecca_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.rebecca_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default CharacterRebecca;
