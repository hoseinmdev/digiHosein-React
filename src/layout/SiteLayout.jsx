import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
const SiteLayout = ({ children }) => {
  return (
    <div className="flex w-full max-w-[1360px] flex-col items-center justify-center gap-2 text-black lg:gap-6">
      <Navigation />
      <div className="fadeShow w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
