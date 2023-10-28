import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SliderData } from "./Slider-Data";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div className={styles.silder}>
        <AiOutlineArrowLeft
          className={`${styles.arrow} ${styles.prev}`}
          onClick={prevSlide}
        />
        <AiOutlineArrowRight
          className={`${styles.arrow} ${styles.next}`}
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={`${styles.index} === ${styles.currentSlide} ?  "slide current" : "slide"`}
              key={index}
            >
              {index === currentSlide && (
                <div className="resize">
                  <img
                    style={{ width: "100%", height: "100vh" }}
                    src={slide.image}
                    alt="slide"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
