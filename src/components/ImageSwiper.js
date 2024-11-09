// src/components/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import { sliderData } from "./topicscmpnents";

// Sample images and titles data


const ImageSlider = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Slider {...settings} >
        {sliderData.map((slide, index) => (
          <div key={index} className="p-2 h-64">
            <div className="bg-white rounded-lg h-96 overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h2 className="text-xl text-center font-bold text-gray-800">{slide.title}</h2>
              </div>
              <div className="p-2">
                <h2 className="text-base font-semibold text-gray-500">{slide.univ}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
