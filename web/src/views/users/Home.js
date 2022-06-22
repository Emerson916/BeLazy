import CardsVideos from "../../components/CardsVideos";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Header from "../../layout/Header";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <Header />
      <ImageCarousel />
      <div className="flex">
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
      </div>

      <div className="flex">
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
      </div>

      <div className="flex">
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
        <CardsVideos />
      </div>
    </div>
  );
};

export default Home;
