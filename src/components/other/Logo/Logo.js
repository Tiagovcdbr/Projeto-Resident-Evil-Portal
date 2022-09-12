import styles from "./Logo.module.scss";
import IMG from "../../../images/Resident2Images/resident-portal.png";

import useSound from 'use-sound';
import soundMenu from '../../../audios/Resident-evil-voice-title.m4a'

const Logo = () => {
  const [effect] = useSound(soundMenu)
  return (
    <div className={styles.logo}>
      <img src={IMG} alt={Logo} onClick={effect} />
    </div>
  );
};

export default Logo;
