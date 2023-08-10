import mobileBanner from "../Accets/images/bannerMobile.webp";
import mobileBannerinMobile from "../Accets/images/phonesBannerInMobile.jpg";
import consoleBanner from "../Accets/images/bannerConsole.webp";
import consoleBannerInMobile from "../Accets/images/consolesBannerInMobile.jpg";
import airpodsBanner from "../Accets/images/bannerAirpods.webp";
import airpodsBannerInMobile from "../Accets/images/headphonesBannerInMobile.jpg";
import airpodsBanner2 from "../Accets/images/bannerAirpods2.webp";
import digitalWatchBanner from "../Accets/images/bannerDigitalWatch.webp";
import digitalWatchBannerInMobile from "../Accets/images/digitalWatchesBannerInMobile.jpg";
import speakerBanner from "../Accets/images/bannerSpeaker.webp";
import speakerBannerInMobile from "../Accets/images/speakersBannerInMobile.jpg";
import tabletBanner from "../Accets/images/bannerTablet.webp";
import laptopsBannerInMobile from "../Accets/images/laptopsBannerInMobile.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";
const allSlides = [
  {
    id: 1,
    src: consoleBanner,
    link: "/categories/consoles",
  },
  { id: 2, src: mobileBanner, link: "/categories/phones" },
  {
    id: 3,
    src: airpodsBanner2,
    link: "/categories/headphones",
  },
  {
    id: 4,
    src: digitalWatchBanner,
    link: "/categories/digitalWatches",
  },
  {
    id: 5,
    src: tabletBanner,
    link: "/categories/tablets",
  },
  {
    id: 6,
    src: speakerBanner,
    link: "/categories/speakers",
  },
  {
    id: 7,
    src: airpodsBanner,
    link: "/categories/headphones",
  },
];
const allSlidesInMobile = [
  {
    id: 1,
    src: consoleBannerInMobile,
    link: "/categories/consoles",
  },
  {
    id: 2,
    src: mobileBannerinMobile,
    link: "/categories/phones",
  },
  {
    id: 3,
    src: airpodsBannerInMobile,
    link: "/categories/headphones",
  },
  {
    id: 4,
    src: digitalWatchBannerInMobile,
    link: "/categories/digitalWatches",
  },
  {
    id: 5,
    src: speakerBannerInMobile,
    link: "/categories/speakers",
  },
  {
    id: 6,
    src: laptopsBannerInMobile,
    link: "/categories/laptops",
  },
];
const Slider = () => {
  const [slides, setSlides] = useState(0);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(0);
  const timerTimeout = useRef();
  const [touchPosition, setTouchPosition] = useState(0);

  useEffect(() => {
    const setAllSlides = () => {
      setTimeout(() => {
        if (window.innerWidth < 1024) setSlides(allSlidesInMobile);
        else setSlides(allSlides);
      }, 1500);
    };
    setAllSlides();
    setFade(1);
  }, []);

  useEffect(() => {
    const autoSlideChanger = () => {
      clearTimeout(timerTimeout.current);
      const timeout = setTimeout(nextSlide, 10000);
      timerTimeout.current = timeout;
    };
    autoSlideChanger();

    return function cleanup() {
      clearTimeout(timerTimeout.current);
    };
  }, [index]);

  const fadeShowSlide = (index) => {
    setFade(0.1);
    setTimeout(() => {
      setIndex(index);
      setFade(1);
    }, 200);
  };
  const onTouchStartHandler = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };
  const onTouchMoveHandler = (e) => {
    if (touchPosition === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;
    if (diff > 5) backSlide();
    if (diff < -5) nextSlide();
    setTouchPosition(null);
  };
  const nextSlide = () => {
    if (index !== slides.length - 1) {
      fadeShowSlide(index + 1);
    } else {
      fadeShowSlide(0);
    }
  };
  const backSlide = () => {
    if (index !== 0) {
      fadeShowSlide(index - 1);
    } else {
      fadeShowSlide(slides.length - 1);
    }
  };
  const renderSlider = () => {
    if (slides) {
      return (
        <div
          className="relative flex w-[96%] items-center justify-between overflow-hidden rounded-xl bg-none shadow-2xl lg:h-80"
          onTouchStart={(e) => onTouchStartHandler(e)}
          onTouchMove={(e) => onTouchMoveHandler(e)}
        >
          <button
            className="absolute right-0 z-20 hidden h-full w-14 cursor-pointer items-center justify-center rounded-l-full bg-slate-200/30 text-3xl text-white hover:w-20 hover:bg-slate-200/50 lg:flex"
            onClick={nextSlide}
          >
            <IoIosArrowForward />
          </button>
          <Link to={slides[index].link}>
            <img
              src={slides[index].src}
              alt={consoleBanner}
              className="h-full w-full"
              style={{ opacity: fade }}
            />
          </Link>
          <button
            className="absolute left-0 z-20 hidden h-full w-14 cursor-pointer items-center justify-center rounded-r-full bg-slate-200/30 text-3xl text-white hover:w-20 hover:bg-slate-200/50 lg:flex"
            onClick={backSlide}
          >
            <IoIosArrowBack />
          </button>
          <div className="absolute bottom-2 left-auto right-auto flex w-full transform items-center justify-center  gap-3 p-2 lg:top-[290px] lg:-scale-x-100">
            {slides.map((e, i) => {
              return (
                <div
                  key={e.id}
                  className={`h-2 w-2 cursor-pointer rounded-full bg-white shadow-xl ${
                    slides.indexOf(e) === index
                      ? "w-6 rounded-lg opacity-100"
                      : "opacity-50"
                  }`}
                  onClick={() => fadeShowSlide(i)}
                ></div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Skeleton width={"95%"} height={"17rem"} radius={"15px"} />;
    }
  };
  return renderSlider();
};

export default Slider;