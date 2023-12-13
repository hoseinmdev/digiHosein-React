import consoleBanner from "../../assets/images/bannerConsole.webp";
import speakerBanner from "../../assets/images/bannerSpeaker.webp";
import mobileBannerinMobile from "../../assets/images/mobileIsStyle.webp";

import { Link } from "react-router-dom";
const LandingBanner = () => {
  return (
    <div className="flex w-full max-w-[2000px] items-center justify-center gap-4 ml-auto mr-auto">
      <Link
        to="/categories/consoles"
        className="hidden w-full overflow-hidden lg:block lg:rounded-lg"
      >
        <img src={consoleBanner} alt={consoleBanner}></img>
      </Link>
      <Link
        to="/categories/speakers"
        className="hidden w-full overflow-hidden rounded-lg lg:block"
      >
        <img src={speakerBanner} alt={speakerBanner}></img>
      </Link>
      <Link
        to="/categories/phones"
        className=" w-11/12 overflow-hidden rounded-xl lg:hidden"
      >
        <img
          className="sliderAnimation"
          src={mobileBannerinMobile}
          alt={speakerBanner}
        ></img>
      </Link>
    </div>
  );
};

export default LandingBanner;
