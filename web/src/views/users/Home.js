import CardsVideos from "../../components/CardsVideos";
import Header from "../../layout/Header";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-current to-purple-800">
      <Header />
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
