import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const API_KEY = "G8XcZJLaeJTx0jQq";
axios.defaults.headers.common["API_KEY"] = API_KEY;

const SliderMitra = () => {
  const [sliderData, setSliderData] = useState([]);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,

    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  const settingsMobile = {
    infinite: true,
    speed: 500,
    
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/mitra");
        setSliderData(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  return (
    <>
      {/* Desktop */}
      <div className="w-full custom-1200:max-w-[1200px] custom-1000:max-w-[1000px] lg:block hidden">
        <Slider {...settings} ref={sliderRef}>
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-center items-center mx-4 w-full h-[176px] "
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  className="object-contain h-full"
                  src={slide.img_url}
                  alt={`Slide ${slide.id}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile */}
      <div className="w-full sm:mt-5  lg:hidden block">
        <Slider {...settingsMobile} ref={sliderRef}>
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-center items-center px-2 w-full h-[156px] "
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  className="object-contain h-full"
                  src={slide.img_url}
                  alt={`Slide ${slide.id}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderMitra;
