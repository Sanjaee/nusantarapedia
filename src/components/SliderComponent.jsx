import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const staticSliderData = [
  { id: 1, image_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721458269/Frame_231_md80jn.png" },
  { id: 2, image_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721545056/Frame_234_m4wbzw.png" },
  { id: 3, image_url: "https://res.cloudinary.com/dgmlqboeq/image/upload/v1721545033/Frame_235_mkvgme.png" },
  // Add more items as needed
];

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
  return (
    <>
      {/* Desktop */}
      <div className="w-full custom-1200:max-w-[1200px] custom-1000:max-w-[1000px] lg:block hidden">
        <Slider {...settings}>
          {staticSliderData.map((slide) => (
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
        <Slider {...settingsMobile}>
          {staticSliderData.map((slide) => (
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
