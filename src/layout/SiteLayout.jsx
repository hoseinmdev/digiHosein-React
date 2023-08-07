import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
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
      <div
        className="flex w-full max-w-[1360px] flex-col items-center justify-center gap-2 text-black lg:gap-6"
        style={{ opacity: fade }}
      >
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
