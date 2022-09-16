import styles from "./LogoSwitch.module.scss"
import IMG from "../../../../images/Resident0/switch-logo.png"

const LogoSwitch = () => {
    return (
        <div className={styles.logo_switch}>
            <img src={IMG} alt={LogoSwitch} />
        </div>
    );
};

export default LogoSwitch;