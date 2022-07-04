import CardsVideos from "../../components/CardCarousel/CardsVideos";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";

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

  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <Header />
      <ImageCarousel data={filmsData} />
      <CardsVideos data={filmsData} title={"Novos lançamentos"} />
      <CardsVideos data={filmsData} title={"Feito para você"} />
      <Footer />
    </div>
  );
};

export default Home;
