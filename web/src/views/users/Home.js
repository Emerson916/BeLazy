import CardsVideos from "../../components/CardCarousel/CardsVideos";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import notFoundImage from "../../assets/img/404Error.svg";

const Home = () => {
  const [filmsData, setFilmsData] = useState();
  useEffect(() => {
    async function getFilms() {
      try {
        const response = await api.get("/v1/films");

        setFilmsData(response.data);
      } catch (error) {
        console.log("Erro da requisição get", error);
      }
    }

    getFilms();
  }, []);

  console.log("FILMS DATA", filmsData);

  return (
    <>
      {filmsData?.length <= 0 || filmsData === undefined ? (
        <>
          <Header />
          {console.log("ESTOU PEGANDO")}
          <div className="h-screen bg-gradient-to-b from-current to-purple-800">
            <img
              className="flex w-full h-[700px] py-24 relative"
              src={notFoundImage}
              alt="Not Found 404"
            />
            <div className="w-full flex flex-col absolute bottom-6">
              <p className="text-white text-2xl font-bold flex mx-auto">
                Oops!!, Estamos passando por problemas tecnicos,
              </p>
              <p className="text-white text-2xl font-bold mb-5 flex mx-auto">
                pedimos desculpa pelo incoveniente, voltaremos já.
              </p>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className="h-full bg-gradient-to-b from-current to-purple-800">
          <Header />
          {console.log("NÂO ESTOU PEGANDO")}

          <ImageCarousel data={filmsData} />
          <CardsVideos data={filmsData} title={"Novos lançamentos"} />
          <CardsVideos data={filmsData} title={"Feito para você"} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
