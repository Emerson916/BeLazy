import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../../assets/img/notFoundImage.svg";
import Button from "../Button";
import StarsEvaluation from "../StarsEvaluation";

const ImageCarousel = ({ data }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(
    () => {
      let width = window.innerWidth;
      const qntImagens = data?.map((item) => item.imagebanner);

      const sliderRight = () => {
        setCurrentSlider(currentSlider + 1);
        const slider = document.getElementById("imageCarousel");
        slider.scrollLeft = slider.scrollLeft + width;
      };

      const sliderLeft = () => {
        width = 0;
        setCurrentSlider(0);
        const slider = document.getElementById("imageCarousel");
        slider.scrollLeft = slider.scrollLeft - 15000;
      };

      const timer = setInterval(() => {
        if (currentSlider <= qntImagens.length / 2) {
          sliderRight();
        } else {
          sliderLeft();
        }
      }, 5000);
      return () => clearInterval(timer);
    },
    [currentSlider]
  );

  return (
    <div
      id="imageCarousel"
      className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth container-snap"
    >
      {data?.map((item, key) => (
        <div className="w-full inline-block h-[600px] scale-95 ease-in-out relative">
          <img
            src={item.imagebanner || imageNotFound}
            alt="Imagem do filme"
            className="h-full right-0 absolute scale-95 "
          />
          <div className="absolute text-white h-full w-2/3 px-10 bottom-0 scale-95 bg-gradient-to-r from-[#000000] via-[#000000] to-transparent">
            <div className="flex flex-col bottom-40 absolute gap-2 mb-5">
              <h1 className="text-white text-4xl font-bold">{item.title_video}</h1>
              <div className="flex my-2">
                <StarsEvaluation evaluation={item.evaluation} />
              </div>
              <p className="text-white w-1/2 h-20 text-xl truncate whitespace-normal">
                {item.sinopse || "Sinopse Indisponível"}
              </p>
              <p className="text-white text-xl font-bold">{item.duration} min</p>
            </div>
            <div className="flex gap-4 absolute bottom-20">
              <Button
                title={"Assistir"}
                width={"200px"}
                height={"60px"}
                backgroundColor={"#6C63FF"}
              />
              <Link key={key} to={`/app/details/${item.id}`}>
                <Button
                  title={"Mais detalhes"}
                  width={"350px"}
                  height={"60px"}
                  backgroundColor={"#343746"}
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
