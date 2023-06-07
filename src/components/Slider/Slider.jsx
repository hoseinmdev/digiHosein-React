import styles from "./slider.module.css";
import mobileBanner from "../../Accets/images/bannerMobile.webp";
import mobileBannerinMobile from "../../Accets/images/phonesBannerInMobile.jpg";
import consoleBanner from "../../Accets/images/bannerConsole.webp";
import consoleBannerInMobile from "../../Accets/images/consolesBannerInMobile.jpg";
import airpodsBanner from "../../Accets/images/bannerAirpods.webp";
import airpodsBannerInMobile from "../../Accets/images/headphonesBannerInMobile.jpg";
import airpodsBanner2 from "../../Accets/images/bannerAirpods2.webp";
import digitalWatchBanner from "../../Accets/images/bannerDigitalWatch.webp";
import digitalWatchBannerInMobile from "../../Accets/images/digitalWatchesBannerInMobile.jpg";
import speakerBanner from "../../Accets/images/bannerSpeaker.webp";
import speakerBannerInMobile from "../../Accets/images/speakersBannerInMobile.jpg";
import tabletBanner from "../../Accets/images/bannerTablet.webp";
import laptopsBannerInMobile from "../../Accets/images/laptopsBannerInMobile.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";
const allSlides = [
  {
    src: consoleBanner,
    link: "/categories/consoles",
  },
  {
    src: mobileBanner,
    link: "/categories/phones",
  },
  {
    src: airpodsBanner2,
    link: "/categories/headphones",
  },
  {
    src: digitalWatchBanner,
    link: "/categories/digitalWatches",
  },
  {
    src: tabletBanner,
    link: "/categories/tablets",
  },
  {
    src: speakerBanner,
    link: "/categories/speakers",
  },
  {
    src: airpodsBanner,
    link: "/categories/headphones",
  },
];
const allSlidesInMobile = [
  {
    src: consoleBannerInMobile,
    link: "/categories/consoles",
  },
  {
    src: mobileBannerinMobile,
    link: "/categories/phones",
  },
  {
    src: airpodsBannerInMobile,
    link: "/categories/headphones",
  },
  {
    src: digitalWatchBannerInMobile,
    link: "/categories/digitalWatches",
  },
  {
    src: speakerBannerInMobile,
    link: "/categories/speakers",
  },
  {
    src: laptopsBannerInMobile,
    link: "/categories/laptops",
  },
];
const Slider = () => {
  const [slides, setSlides] = useState(0);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(0);
  const [timer, setTimer] = useState();
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
      setTimer(setTimeout(nextSlide, 10000));
    };
    autoSlideChanger();
  }, [index]);

  const fadeShowSlide = (action) => {
    setFade(0);
    clearTimeout(timer);

    if (action === "NEXT_SLIDE") {
      setTimeout(() => {
        if (index !== slides.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
        setFade(1);
      }, 250);
    }
    if (action === "BACK_SLIDE") {
      setTimeout(() => {
        if (index !== 0) {
          setIndex(index - 1);
        } else {
          setIndex(slides.length - 1);
        }
        setFade(1);
      }, 250);
    }
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
    fadeShowSlide("NEXT_SLIDE");
  };
  const backSlide = () => {
    fadeShowSlide("BACK_SLIDE");
  };
  const renderSlider = () => {
    if (slides) {
      return (
        <div
          className={styles.sliderBlock}
          onTouchStart={(e) => onTouchStartHandler(e)}
          onTouchMove={(e) => onTouchMoveHandler(e)}
        >
          <button className={styles.nextSlide} onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
          <Link to={slides[index].link}>
            <img
              src={slides[index].src}
              alt={consoleBanner}
              className={styles.bannerStyle}
              style={{ opacity: fade }}
            />
          </Link>
          <button className={styles.backSlide} onClick={backSlide}>
            <IoIosArrowBack />
          </button>
        </div>
      );
    } else {
      return <Skeleton width={"95%"} height={"17rem"} radius={"15px"} />;
    }
  };
  return renderSlider();
};

export default Slider;
