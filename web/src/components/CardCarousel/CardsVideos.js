import CardsVideosItems from "./CardsVideosItems";

const CardsVideos = ({ title }) => {
  return (
    <div className="my-10 select-none">
      <p className="text-white text-2xl font-bold mb-5 flex mx-14" title>
        {title}
      </p>
      <CardsVideosItems />
    </div>
  );
};

export default CardsVideos;
