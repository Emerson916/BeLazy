import CardsVideos from "../../components/CardsVideos";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Header from "../../layout/Header";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <Header />
      <ImageCarousel />

      <CardsVideos />
      <CardsVideos />
      <CardsVideos />
    </div>
  );
};

export default Home;
