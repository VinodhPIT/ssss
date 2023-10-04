import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "swiper";
import "swiper/swiper-bundle.min.css"; // Import the CSS file from your styles directory
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const images = ["/dragon_swiper.svg","/mummy egypt.svg","/butterfly.svg"];
const ImageSwiper = () => {
  swiper.om;
  const params = {
    autoHeight: false,

    pagination: { clickable: true },
    preventInteractionOnTransition: true,
    grabCursor: true,
    centeredSlides: true,

    slidesPerView: 1.5,
    loop: true,
    speed: 150,
    grabCursor: false,
    effect: "coverflow",

    coverflowEffect: {
      rotate: 1,
      depth: 200,
      slideShadows: false,
      modifier: 1,
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,

      clickable: true,
    },

    noSwiping: true, // Disable swiping
    noSwipingClass: "swiper-no-swiping",
    simulateTouch: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        simulateTouch: true,
      },
    },
  };

  return (
    <Swiper
      {...params}
      style={{ transform: `translateX(0)` }}
      className="swiper-container"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default ImageSwiper;
