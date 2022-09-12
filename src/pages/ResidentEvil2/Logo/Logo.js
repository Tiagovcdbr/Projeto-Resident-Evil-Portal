import styles from "./Logo.module.scss";
import IMG from "../../../images/Resident2Images/resident-portal.png";

import useSound from 'use-sound';
import soundMenu from '../../../audios/Resident-evil-voice-title.m4a'
import { Link } from "react-router-dom";

const Logo = () => {
  const [effect] = useSound(soundMenu)
  return (
    <div className={styles.logo}>
    <Link to="/">
      <img src={IMG} alt={Logo} onClick={effect} />
    </Link>
    </div>
  );
};

export default Logo;
