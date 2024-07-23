import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const API_KEY = "G8XcZJLaeJTx0jQq";
axios.defaults.headers.common["API_KEY"] = API_KEY;

const SliderComponent = () => {
  const [sliderData, setSliderData] = useState([]);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const settingsMobile = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/testimoni");
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
            className="flex justify-between px-4 items-center w-full"
          >
            <img
              className="object-cover object-center h-full max-h-[317px] w-full rounded-xl"
              src={slide.image_url} 
              alt={`Slide ${slide.id}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>

    {/* Mobile */}

    <div className="w-full custom-200:max-w-[250px] custom-300:max-w-[350px] lg:hidden px-5">
      <Slider {...settingsMobile} ref={sliderRef}>
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className="flex justify-between px-4 items-center w-full"
          >
            <img
              className="object-cover object-center w-full rounded-xl"
              src={slide.image_url}
              alt={`Slide ${slide.id}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  </>
  );
};

export default SliderComponent;
