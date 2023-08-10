import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientConstants } from "./aboutConstants";

const ClientCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = clientConstants.map((item) => (
    <div>
      <img
        className="client-image"
        key={item.id}
        src={item.imgSrc}
        alt="Client-Image"
      />
    </div>
  ));

  return (
    <div>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
};

export default ClientCarousel;
