import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Button from "../../components/Button";
import imageNotFound from "../../assets/img/notFoundImage.svg";
import StarsEvaluation from "../../components/StarsEvaluation";
import CardsVideos from "../../components/CardCarousel/CardsVideos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ButtonFeedback from "../../components/ButtonFeedback";
import share from "../../assets/img/share.svg";
import bookmark from "../../assets/img/bookmark.svg";
import bookmarkFill from "../../assets/img/bookmarkFill.svg";
import error from "../../assets/img/error.svg"

const CardDetails = () => {
  const [filmsData, setFilmsData] = useState();
  const [carouselData, setCarouselData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await api.get(`/v1/films/` + id);

        setFilmsData(response.data[0]);
      } catch (error) {
        console.log("Erro da requisição get", error);
      }
    }

    getFilm();
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
          src={filmsData?.imagebanner || imageNotFound}
          alt="Imagem do filme"
          className="h-[500px] w-full"
        />

        <div className="flex flex-row justify-between m-5 pt-10">
          <div>
            <h1 className="text-white text-3xl font-bold mx-9">
              {filmsData?.title_video || "Titulo Indisponível"}
            </h1>
            <p className="text-white border text-1xl mx-9 px-2 border-l-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-br-[30px]">
              {filmsData?.type_video || ""}
            </p>
            <div className="flex m-5 mx-9">
              <StarsEvaluation evaluation={filmsData?.evaluation || 0} />
            </div>
          </div>

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
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold flex mx-14">Sinopse</h2>
          <p className="text-white text-1xl font-bold flex mx-14 my-10">
            {filmsData?.sinopse || "Sinopse Indisponível"}
          </p>
        </div>
        <CardsVideos title={"Para você"} data={carouselData}/>
        <Footer />
      </div>
    </>
  );
};

export default CardDetails;
