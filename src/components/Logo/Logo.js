import styles from "./Logo.module.scss";
import IMG from "../../images/logo.png";

import useSound from 'use-sound';
import soundMenu from '../../audios/Resident Evil 2 Voice Title.m4a'

const Logo = () => {
  const [effect] = useSound(soundMenu)
  return (
    <div className={styles.logo}>
      <img src={IMG} alt={Logo} onClick={effect} />
    </div>
  );
};

export default Logo;
