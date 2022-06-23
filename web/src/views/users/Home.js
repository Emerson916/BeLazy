import CardsVideos from "../../components/CardCarousel/CardsVideos";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <Header />
      <ImageCarousel />
      <CardsVideos title={"Novos lançamentos"} />
      <CardsVideos title={"Os melhores filmes"} />
      <Footer />
    </div>
  );
};

export default Home;
