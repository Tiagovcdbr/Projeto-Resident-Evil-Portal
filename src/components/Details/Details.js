import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Details.module.scss";

const Details = ({
  title1,
  paragraph1,
  img1,
  alt1,
  title2,
  paragraph2,
  img2,
  alt2,
  title3,
  paragraph3,
  img3,
  alt3,
  title4,
  paragraph4,
  img4,
  alt4,
  title5,
  paragraph5,
  img5,
  alt5,
  title6,
  paragraph6,
  img6,
  alt6,
}) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.container} id="details">
      <h2 data-aos="fade">Horror Clássico e Jogabilidade Inovadora</h2>
      <div data-aos="fade-up" className={styles.features_content}>
        <div className={styles.features_content_card}>
          <img src={img1} alt={alt1} />
          <h3>{title1}</h3>
          <p>{paragraph1}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img2} alt={alt2} />
          <h3>{title2}</h3>
          <p>{paragraph2}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img3} alt={alt3} />
          <h3>{title3}</h3>
          <p>{paragraph3}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img4} alt={alt4} />
          <h3>{title4}</h3>
          <p>{paragraph4}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img5} alt={alt5} />
          <h3>{title5}</h3>
          <p>{paragraph5}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img6} alt={alt6} />
          <h3>{title6}</h3>
          <p>{paragraph6}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
