import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./About_Umbrella.module.scss";

const About_Umbrella = ({ title, paragraphOne, paragraphTwo, image, alt }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.about_umbrella} id="about_umbrella">
      <div className={styles.about_umbrella_container}>
        <div data-aos="fade-right" className={styles.about_umbrella_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div data-aos="fade-left" className={styles.about_umbrella_container_right}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default About_Umbrella;
