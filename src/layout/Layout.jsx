import Navigation from "../components/Navigation/Navigation";
import styles from "./layout.module.css"
const Layout = ({ children }) => {
  return (
    <div className={styles.siteLayout}>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
