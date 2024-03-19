import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";

const MySwiper = ({ children, slides, pag, nav, space }) => {
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: slides,
      spaceBetween: space,
    },
  };

  return (
    <Swiper
      dir="ltr"
      modules={[Navigation, Pagination]}
      breakpoints={breakpoints}
      navigation={nav}
      pagination={pag}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
