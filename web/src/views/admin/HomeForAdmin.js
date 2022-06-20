import { useState } from "react";
import InputData from "../../components/input";
import api from "../../services/api";

const HomeForAdmin = () => {
  const [filmsData, setFilmsData] = useState({
    imageCard: "",
    imageBanner: "",
    title_video: "",
    evaluation: 0,
    favorite: false,
    releaseYear: Date(),
    createAt: Date(),
    duration: 0,
    sinopse: "",
  });

  console.log(setFilmsData)

  const createNewFilm = async () => {
    try {
      await api.post("/v1/films", {
        imageCard: filmsData.imageCard,
        imageBanner: filmsData.imageBanner,
        title_video: filmsData.title_video,
        evaluation: filmsData.evaluation,
        favorite: filmsData.favorite,
        releaseYear: filmsData.releaseYear,
        createAt: filmsData.createAt,
        duration: filmsData.duration,
        sinopse: filmsData.sinopse,
      });
    } catch (error) {
      console.log("Error do criando filme", error);
    }
  };

  return (
    <div className="h-screen px-10 bg-gradient-to-b from-current to-purple-800">
      <div className="flex py-10">
        <h1 className="text-white text-2xl pr-2">Olá,</h1>
        <p className="text-white text-2xl font-bold">Emerson Admin</p>
      </div>

      <div className="grid grid-cols-2">
        <InputData placeholder={"ID do filme a ser deletado"} />
        <button className="h-16 w-1/2 ml-10 text-purple-700 rounded-md border-4 border-purple-700 bg-white text-xl font-bold hover:opacity-75">
          Deletar
        </button>
      </div>

      <div className="flex flex-col py-5">
        <p className="text-white text-xl">O que você deseja adicionar ?</p>
        <select className="w-1/4 h-8 mt-2 focus:outline-none rounded-md">
          <option>Filme</option>
          <option>Serie</option>
          <option>Anime</option>
        </select>
      </div>

      <form>
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-5 pr-2">
            <InputData
              placeholder={"Nome do filme"}
              value={filmsData.title_video}
            />
            <InputData
              placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"}
              value={filmsData.imageCard}
            />
            <InputData
              placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"}
              value={filmsData.imageBanner}
            />
            <InputData
              placeholder={"Avaliação do público"}
              value={filmsData.evaluation}
            />
          </div>
          <div className="flex flex-col space-y-5 pl-2">
            <InputData
              placeholder={"Data que foi adicionada no site"}
              value={filmsData.createAt}
            />
            <InputData
              placeholder={"Data que o foi lançado"}
              value={filmsData.releaseYear}
            />
            <InputData
              placeholder={"Duração do filme"}
              value={filmsData.duration}
            />
            <InputData
              placeholder={"Sinopse do filme"}
              value={filmsData.sinopse}
            />
          </div>
        </div>
        <div className="flex justify-end py-10">
          <button
            onClick={() => {
              createNewFilm();
            }}
            className="flex items-center justify-center w-2/6 h-16 p-2 bg-purple-700 rounded-md text-white text-xl font-bold  hover:opacity-75"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForAdmin;
