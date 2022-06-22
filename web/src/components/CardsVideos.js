// import { useNavigate } from "react-router-dom";

const CardsVideos = () => {
  //   const navigation = useNavigate();

  return (
    <div className="w-52 h-62 ">
      <img
        className="w-full h-1/2"
        alt="Imagem do filme"
        src={`https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-poster-2-1.jpg?resize=696%2C1031&ssl=1`}
      />
      <p className="text-white text-1xl truncate font-bold">Titulo do filme</p>
    </div>
  );
};

export default CardsVideos;
