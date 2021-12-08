import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./BioWilliam.module.scss";

const BioWilliam = ({
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
  title7,
  paragraph7,
  img7,
  alt7,
  title8,
  paragraph8,
  img8,
  alt8,
  title9,
  paragraph9,
  img9,
  alt9,
  title10,
  paragraph10,
  img10,
  alt10,
  title11,
  paragraph11,
  img11,
  alt11,
  title12,
  paragraph12,
  img12,
  alt12,
}) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className={styles.container} id="details">
      <h2 data-aos="fade">Fases de William e outros inimigos</h2>
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

        <div className={styles.features_content_card}>
          <img src={img7} alt={alt7} />
          <h3>{title7}</h3>
          <p>{paragraph7}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img8} alt={alt8} />
          <h3>{title8}</h3>
          <p>{paragraph8}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img9} alt={alt9} />
          <h3>{title9}</h3>
          <p>{paragraph9}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img10} alt={alt10} />
          <h3>{title10}</h3>
          <p>{paragraph10}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img11} alt={alt11} />
          <h3>{title11}</h3>
          <p>{paragraph11}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img12} alt={alt12} />
          <h3>{title12}</h3>
          <p>{paragraph12}</p>
        </div>
        
      </div>
    </div>
  );
};

export default BioWilliam;
