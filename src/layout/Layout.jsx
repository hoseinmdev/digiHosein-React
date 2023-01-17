import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
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
      <div>
        <div style={{ opacity: fade }}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
