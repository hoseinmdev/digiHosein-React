import styles from "./slider.module.css";
import mobileBanner from "../../Accets/images/bannerMobile.webp";
import consoleBanner from "../../Accets/images/bannerConsole.webp";
import airpodsBanner from "../../Accets/images/bannerAirpods.webp";
import digitalWatchBanner from "../../Accets/images/bannerDigitalWatch.webp";
import ramHardBanner from "../../Accets/images/bannerRamHard.webp";
import speakerBanner from "../../Accets/images/bannerSpeaker.webp";
import tabletBanner from "../../Accets/images/bannerTablet.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SliderSkeleton from "./SliderSkeleton";
const allSlides = [
  {
    src: consoleBanner,
    link: "consoles",
  },
  {
    src: mobileBanner,
    link: "mobiles",
  },
  {
    src: ramHardBanner,
    link: "ramHards",
  },
  {
    src: digitalWatchBanner,
    link: "digitalWatches",
  },
  {
    src: tabletBanner,
    link: "teblets",
  },
  {
    src: speakerBanner,
    link: "speakers",
  },
  {
    src: airpodsBanner,
    link: "airpods",
  },
];

const Slider = () => {
  const [slides, setSlides] = useState();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(0);
  const [timer, setTimer] = useState();

  useEffect(() => {
    const setAllSlides = () => {
      setTimeout(() => {
        setSlides(allSlides);
      }, 1500);
    };
    setAllSlides();
    setTimeout(() => setFade(1), 1600);
  }, []);
  useEffect(() => {
    const autoSlideChanger = () => {
      setTimer(setTimeout(nextSlide, 8000));
    };
    autoSlideChanger();
  }, [index]);

  const fadeShowSlide = (action) => {
    setFade(0.2);
    clearTimeout(timer);
    if (action === "NEXT_SLIDE") {
      setTimeout(() => {
        if (index !== allSlides.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
        setFade(1);
      }, 180);
    }
    if (action === "BACK_SLIDE") {
      setTimeout(() => {
        if (index !== 0) {
          setIndex(index - 1);
        } else {
          setIndex(6);
        }
        setFade(1);
      }, 200);
    }
  };
  const nextSlide = () => {
    fadeShowSlide("NEXT_SLIDE");
  };
  const backSlide = () => {
    fadeShowSlide("BACK_SLIDE");
  };
  const renderSlider = () => {
    if (!slides) {
      return <SliderSkeleton />;
    }
    if (slides) {
      return (
        <div className={styles.sliderBlock}>
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
    }
  };
  return renderSlider();
};

export default Slider;