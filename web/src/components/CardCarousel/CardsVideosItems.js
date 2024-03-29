import arrowLeft from "../../assets/img/arrowLeft.svg";
import arrowRight from "../../assets/img/arrowRight.svg";
import "../../css/styles.css";
import { Link } from "react-router-dom";

const CardsVideosItems = ({ data }) => {
  let width = window.innerWidth;

  const sliderLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - (width - 250);
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + (width - 250);
  };

  return (
    <div className="relative flex">
      <button
        onClick={sliderLeft}
        className="opacity-75 cursor-pointer hover:opacity-100"
      >
        <img src={arrowLeft} alt="Icone de uma flecha virada para esquerda" />
      </button>

      <div
        id="slider"
        className="w-full h-[380px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth container-snap"
      >
        {data?.map((item, key) => (
          <Link
            key={key}
            to={`/app/details/${item.id}`}
            className="w-[220px] inline-block h-[300px] cursor-pointer ease-in-out hover:duration-300 hover:scale-95 hover:opacity-80 hover:border-2 hover:border-white"
          >
            <img
              src={item.imagecard}
              alt="Imagem do filme"
              className="h-full w-full scale-95"
            />
            <p className="text-white px-2 text-1xl font-bold py-2 truncate">
              {item.title_video || "Titulo indisponivel"}
            </p>
          </Link>
        ))}
      </div>
      <button
        onClick={sliderRight}
        className="opacity-75 cursor-pointer hover:opacity-100"
      >
        <img src={arrowRight} alt="Icone de uma flecha virada para direita" />
      </button>
    </div>
  );
};

export default CardsVideosItems;
