// import Button from "../components/Button";
// import imageNotFound from "../assets/img/notFoundImage.svg";
// import StarsEvaluation from "../components/StarsEvaluation";
import CardsVideos from "../components/CardCarousel/CardsVideos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
// import ButtonFeedback from "../components/ButtonFeedback";
// import share from "../assets/img/share.svg";
// import bookmark from "../assets/img/bookmark.svg";
// import bookmarkFill from "../assets/img/bookmarkFill.svg";
// import error from "../assets/img/error.svg";
import MovieDetails from "./DetailsScreen/MovieDetails";

const CardDetails = () => {
  const [filmsData, setFilmsData] = useState();
  const [seriesData, setSeriesData] = useState();
  const [carouselData, setCarouselData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getVideos() {
      try {
        const films = await api.get(`/v1/films/` + id);
        const series = await api.get(`/v1/serie/` + id);

        setFilmsData(films.data[0]);
        setSeriesData(series.data[0]);
      } catch (error) {
        console.log("Erro da requisição get", error);
      }
    }

    getVideos();
  }, [id]);

  useEffect(() => {
    async function getFilmsForCarousel() {
      try {
        const response = await api.get(`/v1/films/`);

        setCarouselData(response.data);
      } catch (error) {
        console.log("Erro da requisição get", error);
      }
    }
    getFilmsForCarousel();
  }, []);

  return (
    <>
      <div className="h-full bg-gradient-to-b from-current to-purple-800">
        {seriesData ? (
          <MovieDetails />
        ) : (
          <div className="h-full mr-10 flex flex-col">
            <select className="border-none rounded-md w-[400px] h-[50px]  text-white bg-gradient-to-b from-[#303C76] to-[#6C63FF]">
              <option className="h-[60px] font-bold bg-[#303C76]">
                1 ° temporada
              </option>
              <option className="h-[60px] font-bold bg-[#303C76]">
                2 ° temporada
              </option>
            </select>
            <div className="w-full h-[220px] overflow-y-scroll scroll whitespace-nowrap scroll-smooth">
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
              <p className="h-[45px] rounded-md flex items-center pl-2 text-white bg-[#303C76]">
                titulo do ep
              </p>
            </div>
          </div>
        )}
        <CardsVideos title={"Para você"} data={carouselData} />
      </div>
    </>
  );
};

export default CardDetails;
