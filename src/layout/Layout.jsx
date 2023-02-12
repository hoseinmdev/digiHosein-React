import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Skeleton/Skeleton";
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
    <>
      <Navigation />
      <div style={{ opacity: fade }}>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
