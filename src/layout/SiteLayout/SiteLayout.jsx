import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Skeleton/Skeleton";
import Navigation from "../../components/Navigation/Navigation/Navigation";
import styles from "./SiteLayout.module.css";
import backToUp from "utils/BackToUp";
const SiteLayout = ({ children }) => {
  const [fade, setFade] = useState(0);
  useEffect(() => {
    backToUp();
    setTimeout(() => {
      setFade(1);
    }, 100);
  }, []);

  return (
    <>
      <div className={styles.siteLayout} style={{ opacity: fade }}>
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
