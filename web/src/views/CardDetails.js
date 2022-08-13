import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Button from "../components/Button";
import imageNotFound from "../assets/img/notFoundImage.svg";
import StarsEvaluation from "../components/StarsEvaluation";
import CardsVideos from "../components/CardCarousel/CardsVideos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import ButtonFeedback from "../components/ButtonFeedback";
import share from "../assets/img/share.svg";
import bookmark from "../assets/img/bookmark.svg";
import bookmarkFill from "../assets/img/bookmarkFill.svg";
import error from "../assets/img/error.svg";

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
      <Header />
      <div className="h-full bg-gradient-to-b from-current to-purple-800">
        <img
          src={
            filmsData?.imagebanner || seriesData?.imagebanner || imageNotFound
          }
          alt="Imagem do filme"
          className="h-[500px] w-full"
        />

        <div className="flex flex-row justify-between m-5 pt-10">
          <div>
            <h1 className="text-white text-3xl font-bold mx-9">
              {filmsData?.title_video ||
                seriesData?.title_video ||
                "Titulo Indisponível"}
            </h1>
            <p className="w-[200px] text-white border text-1xl mx-9 px-2 border-l-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-br-[30px]">
              {filmsData?.type_video || seriesData?.type_video || ""}
            </p>
            <div className="flex m-5 mx-9">
              <StarsEvaluation
                evaluation={
                  filmsData?.evaluation || seriesData?.evaluation || 0
                }
              />
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold flex mt-20 mx-9">
                Sinopse
              </h2>
              <p className="text-white text-1xl font-bold flex mx-9 mt-8">
                {filmsData?.sinopse ||
                  seriesData?.sinopse ||
                  "Sinopse Indisponível"}
              </p>
            </div>
          </div>

          {!seriesData?.type_video ? (
            <div>
              <Button
                height={"64px"}
                backgroundColor={"#6C63FF"}
                width={"400px"}
                title={"Assitir"}
              />

              <div className="flex">
                <ButtonFeedback
                  IconSvg={bookmark}
                  IconFill={bookmarkFill}
                  title="Favorito"
                />
                <ButtonFeedback
                  IconSvg={error}
                  IconFill={error}
                  title="Relatar Erro"
                />
                <ButtonFeedback
                  IconSvg={share}
                  IconFill={share}
                  title="Compartilhar"
                />
              </div>
            </div>
          ) : (
            <div className="h-full mr-10 flex flex-col">
              {console.log("SEASON", seriesData)}

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
        </div>

        <CardsVideos title={"Para você"} data={carouselData} />
        <Footer />
      </div>
    </>
  );
};

export default CardDetails;
