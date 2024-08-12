import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const SliderComponent = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/testimoni");
        setSliderData(response.data);
        console.log(response.data);
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
        <Slider {...settings}>
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-between px-4 items-center w-full"
            >
              <div className="justify-center bg-[#FFFFFF] rounded-2xl items-start flex flex-col w-full h-[317px] px-5">
                <div className="flex items-start">
                  <img
                    className="rounded-full w-[75px] h-[75px] object-cover"
                    src={slide.image_url}
                    alt=""
                  />
                  <div className=" w-[200px] ml-6 text-start text-[#696969]">
                    <p className="font-bold text-xl text-[#000000]">
                      {slide.name}
                    </p>
                    <p className="text-sm">{slide.jabatan}</p>
                    <p className="text-sm">{slide.univ}</p>
                  </div>
                </div>
                <p className="text-sm mt-5 text-center text-[#696969]">
                  {slide.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile */}
      <div className="w-full custom-200:max-w-[250px] custom-300:max-w-[350px] lg:hidden px-5">
        <Slider {...settingsMobile}>
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-between px-4 items-center w-full"
            >
              <div className="justify-center bg-[#FFFFFF] rounded-2xl items-start flex flex-col w-full h-[200px] px-5">
                <div className="flex items-start">
                  <img
                    className="rounded-full w-[55px] h-[55px] object-cover"
                    src={slide.image_url}
                    alt=""
                  />
                  <div className=" w-[140px] ml-5 text-start text-[#696969]">
                    <p className="font-bold text-sm text-[#000000]">
                      {slide.name}
                    </p>
                    <p className="text-[10px]">{slide.jabatan}</p>
                    <p className="text-[10px]">{slide.univ}</p>
                  </div>
                </div>
                <p className="text-[10px] mt-5 text-center text-[#696969]">
                  {slide.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
