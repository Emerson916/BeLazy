import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageNotFound from "../../assets/img/pageNotFound.svg";

const ImageCarousel = ({ data }) => {
  const navigate = useNavigate();
  const [currentSlider, setCurrentSlider] = useState(0);
  useEffect(() => {
    let width = window.innerWidth;
    const qntImagens = data?.map((item) => item.imagebanner);

    const sliderRight = () => {
      setCurrentSlider(currentSlider + 1)
      const slider = document.getElementById("imageCarousel");
      slider.scrollLeft = slider.scrollLeft + width;
    };

    const sliderLeft = () => {
      width = 0;
      setCurrentSlider(0)
      const slider = document.getElementById("imageCarousel");
      slider.scrollLeft = slider.scrollLeft - 15000;
    };

    const timer = setInterval(() => {
      if (currentSlider <= qntImagens.length / 2) {
        sliderRight();
      } else {
        sliderLeft();
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [currentSlider]);

  return (
    <div
      id="imageCarousel"
      className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth container-snap"
    >
      {data?.map((item, key) => (
        <div
          key={key}
          onClick={() => navigate("/cardDetails", { data })}
          className="w-full inline-block h-[550px] cursor-pointer hover:scale-95 ease-in-out duration-300 hover:opacity-80"
        >
          <img
            src={item.imagebanner || imageNotFound}
            alt="Imagem do filme"
            className="h-full w-full scale-95"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
