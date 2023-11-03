import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GlobalSlider = ({ slides,dots,arrows }) => {
  var settings = {
    dots: dots ? true:false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows:arrows? true:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return <div  key={index}>{slide}</div>;
        })}
      </Slider>
    </div>
  );
};

export default GlobalSlider;
