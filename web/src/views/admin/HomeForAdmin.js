import { useState } from "react";
import InputData from "../../components/InputData";
import Footer from "../../layout/Footer";
import api from "../../services/api";

const HomeForAdmin = () => {
  const [filmsData, setFilmsData] = useState({
    imageCard: "",
    imageBanner: "",
    title_video: "",
    evaluation: 0,
    favorite: false,
    releaseYear: "",
    createAt: "",
    duration: 0,
    sinopse: "",
  });

  const [idFilmDelete, setIdFilmDelete] = useState("");
  const [selectValue, setSelectValue] = useState("filme");

  const deleteFilm = async (idFilmDelete) => {
    try {
      await api.delete(`/v1/films/${idFilmDelete}`);
      alert("Filme deletado com sucesso!!");
    } catch (error) {
      console.log("Error do deletando filme", error);
      alert("Não foi possível, deletar o filme");
    }
  };

  const createNewFilm = async () => {
    try {
      await api.post(
        "/v1/films",
        {
          imageCard: filmsData.imageCard,
          imageBanner: filmsData.imageBanner,
          title_video: filmsData.title_video,
          evaluation: filmsData.evaluation,
          favorite: filmsData.favorite,
          releaseYear: filmsData.releaseYear,
          createAt: filmsData.createAt,
          duration: filmsData.duration,
          sinopse: filmsData.sinopse,
        },
        alert("Filme adicionado com sucesso")
      );
    } catch (error) {
      alert("Não foi possível adicionar o filme!!");
      console.log("Error do criando filme", error);
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <div className="flex p-10">
        <h1 className="text-white text-2xl pr-2">Olá,</h1>
        <p className="text-white text-2xl font-bold">Emerson Admin</p>
      </div>

      <div className="grid grid-cols-2  px-10">
        <InputData
          placeholder={"ID do filme a ser deletado"}
          defaultValue={idFilmDelete}
          type={"text"}
          onChange={(t) => setIdFilmDelete(t.target.value)}
        />
        <button
          onClick={() => {
            deleteFilm(idFilmDelete);
          }}
          className="h-16 w-1/2 ml-10 text-[#6C63FF] rounded-md border-4 border-[#6C63FF] bg-white text-xl font-bold hover:opacity-75"
        >
          Deletar
        </button>
      </div>

      <div className="flex flex-col py-5  px-10">
        <p className="text-white text-xl">O que você deseja adicionar ?</p>
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          className="w-1/4 h-8 mt-2 focus:outline-none rounded-md"
        >
          <option value="filme">Filme</option>
          <option value="animeSerie">Anime / Série</option>
        </select>
      </div>

      {selectValue === "filme" ? (
        <form onSubmit={createNewFilm}>
          <div className="grid grid-cols-2 px-10">
            <div className="flex flex-col space-y-5 pr-2">
              <InputData
                placeholder={"Nome do filme"}
                defaultValue={filmsData.title_video}
                type={"text"}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, title_video: e.target.value })
                }
              />

              <InputData
                placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"}
                defaultValue={filmsData.imageCard}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, imageCard: e.target.value })
                }
              />
              <InputData
                placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"}
                defaultValue={filmsData.imageBanner}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, imageBanner: e.target.value })
                }
              />
              <InputData
                placeholder={"Avaliação do público"}
                defaultValue={filmsData.evaluation}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, evaluation: e.target.value })
                }
                type={"number"}
              />
            </div>
            <div className="flex flex-col space-y-5 pl-2">
              <InputData
                placeholder={"Data que foi adicionada no site"}
                defaultValue={filmsData.createAt}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, createAt: e.target.value })
                }
              />
              <InputData
                placeholder={"Data que o foi lançado"}
                defaultValue={filmsData.releaseYear}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, releaseYear: e.target.value })
                }
              />
              <InputData
                placeholder={"Duração do filme em minutos"}
                defaultValue={filmsData.duration}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, duration: e.target.value })
                }
                type={"number"}
              />
              <InputData
                placeholder={"Sinopse do filme"}
                defaultValue={filmsData.sinopse}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, sinopse: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end p-10">
            <button className="flex items-center justify-center w-2/6 h-16 p-2 bg-[#6C63FF] rounded-md text-white text-xl font-bold  hover:opacity-75">
              Enviar
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={createNewFilm}>
          <div className="grid grid-cols-2 px-10">
            <div className="flex flex-col space-y-5 pr-2">
              <InputData
                placeholder={"Nome do Anime / Série"}
                defaultValue={filmsData.title_video}
                type={"text"}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, title_video: e.target.value })
                }
              />

              <InputData
                placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"}
                defaultValue={filmsData.imageCard}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, imageCard: e.target.value })
                }
              />
              <InputData
                placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"}
                defaultValue={filmsData.imageBanner}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, imageBanner: e.target.value })
                }
              />
              <InputData
                placeholder={"Avaliação do público"}
                defaultValue={filmsData.evaluation}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, evaluation: e.target.value })
                }
                type={"number"}
              />
              <InputData
                placeholder={"Sinopse do filme"}
                defaultValue={filmsData.sinopse}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, sinopse: e.target.value })
                }
              />
              <InputData
                placeholder={"Sinopse do filme"}
                defaultValue={filmsData.sinopse}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, sinopse: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-5 pl-2">
              <InputData
                placeholder={"Data que foi adicionada no site"}
                defaultValue={filmsData.createAt}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, createAt: e.target.value })
                }
              />
              <InputData
                placeholder={"Data que o foi lançado"}
                defaultValue={filmsData.releaseYear}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, releaseYear: e.target.value })
                }
              />
              <InputData
                placeholder={"Duração do filme em minutos"}
                defaultValue={filmsData.duration}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, duration: e.target.value })
                }
                type={"number"}
              />
              <InputData
                placeholder={"Sinopse do Anime / Série"}
                defaultValue={filmsData.sinopse}
                onChange={(e) =>
                  setFilmsData({ ...filmsData, sinopse: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end py-10">
            <button className="flex items-center justify-center w-2/6 h-16 p-2 bg-purple-700 rounded-md text-white text-xl font-bold  hover:opacity-75">
              Enviar
            </button>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default HomeForAdmin;
