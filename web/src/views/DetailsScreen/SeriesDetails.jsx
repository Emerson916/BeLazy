// import Button from "../components/Button";
import imageNotFound from "../../assets/img/notFoundImage.svg";
import StarsEvaluation from "../../components/StarsEvaluation";
import CardsVideos from "../../components/CardCarousel/CardsVideos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
// import ButtonFeedback from "../components/ButtonFeedback";
// import share from "../assets/img/share.svg";
// import bookmark from "../assets/img/bookmark.svg";
// import bookmarkFill from "../assets/img/bookmarkFill.svg";
// import error from "../assets/img/error.svg";

const SeriesDetails = () => {
  const [filmsData, setFilmsData] = useState();
  const [carouselData, setCarouselData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getVideos() {
      try {
        const films = await api.get(`/v1/films/` + id);
        setFilmsData(films.data[0]);
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
        <img
          src={filmsData?.imagebanner || imageNotFound}
          alt="Imagem do filme"
          className="h-[500px] w-full"
        />

        <div className="flex flex-row justify-between m-5 pt-10">
          <div>
            <h1 className="text-white text-3xl font-bold mx-9">
              {filmsData?.title_video || "Titulo Indisponível"}
            </h1>
            <p className="w-[200px] text-white border text-1xl mx-9 px-2 border-l-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-br-[30px]">
              {filmsData?.type_video || ""}
            </p>
            <div className="flex m-5 mx-9">
              <StarsEvaluation evaluation={filmsData?.evaluation || 0} />
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold flex mt-20 mx-9">
                Sinopse
              </h2>
              <p className="text-white text-1xl font-bold flex mx-9 mt-8">
                {filmsData?.sinopse || "Sinopse Indisponível"}
              </p>
            </div>
          </div>
        </div>

        <CardsVideos title={"Para você"} data={carouselData} />
      </div>
    </>
  );
};

export default SeriesDetails;
