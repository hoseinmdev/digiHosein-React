import { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  const [fade, setFade] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setFade(1);
    }, 100);
  }, []);

  return (
    <div className={styles.siteLayout}>
      <Navigation />
      <div style={{ opacity: fade }}>{children}</div>
    </div>
  );
};

export default Layout;
