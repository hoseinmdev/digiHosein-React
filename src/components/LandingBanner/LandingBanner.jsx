import styles from "./LandingBanner.module.css";
import consoleBanner from "../../Accets/images/bannerConsole.webp";
import speakerBanner from "../../Accets/images/bannerSpeaker.webp";
import { Link } from "react-router-dom";
const LandingBanner = () => {
  return (
    <div className={styles.landingBannerContainer}>
      <Link to="/categories/consoles">
        <img src={consoleBanner} alt={consoleBanner}></img>
      </Link>
      <Link to="/categories/speakers">
        <img src={speakerBanner} alt={speakerBanner}></img>
      </Link>
    </div>
  );
};

export default LandingBanner;
