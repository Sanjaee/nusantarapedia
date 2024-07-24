import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const staticSliderData = [
  { id: 1, img_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721624854/mitra1_nulzo1.png" },
  { id: 2, img_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721628546/mitrabaru_akfdlh.png" },
  { id: 3, img_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721624854/mitra3_vfexco.png" },
  { id: 4, img_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721628557/mitra4_a5x8kh.png" },
  { id: 5, img_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721624854/mitra5_jbcjij.png" },
  // Add more items as needed
];

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

const SliderMitra = () => {
  return (
    <>
      {/* Desktop */}
      <div className="w-full custom-1200:max-w-[1200px] custom-1000:max-w-[1000px] lg:block hidden">
        <Slider {...settings}>
          {staticSliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-center items-center mx-4 w-full h-[176px]"
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
      <div className="w-full sm:mt-5 lg:hidden block">
        <Slider {...settingsMobile}>
          {staticSliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-center items-center px-2 w-full h-[156px]"
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
