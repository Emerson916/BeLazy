import { useState } from "react";
import Button from "../../components/Button";
import InputData from "../../components/InputData";
import api from "../../services/api";

const FormFilms = () => {
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
    type_video: "",
  });

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
          type_video: filmsData.type_video,
        },
        alert("Filme adicionado com sucesso")
      );
    } catch (error) {
      alert("Não foi possível adicionar o filme!!");
      console.log("Error do criando filme", error);
    }
  };
  return (
    <form onSubmit={createNewFilm}>
      <div className="grid grid-cols-2 px-10">
        <div className="flex flex-col space-y-5 pr-2">
          <InputData
            height={64}
            placeholder={"Nome do filme"}
            defaultValue={filmsData.title_video}
            type={"text"}
            onChange={(e) =>
              setFilmsData({ ...filmsData, title_video: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"}
            defaultValue={filmsData.imageCard}
            onChange={(e) =>
              setFilmsData({ ...filmsData, imageCard: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"}
            defaultValue={filmsData.imageBanner}
            onChange={(e) =>
              setFilmsData({ ...filmsData, imageBanner: e.target.value })
            }
          />

          <InputData
            height={64}
            placeholder={"Avaliação do público"}
            defaultValue={filmsData.evaluation}
            onChange={(e) =>
              setFilmsData({ ...filmsData, evaluation: e.target.value })
            }
            type={"number"}
          />
          <div>
            <select
              onChange={(e) =>
                setFilmsData({ ...filmsData, type_video: e.target.value })
              }
              className="w-full h-12 mt-2 focus:outline-none rounded-md"
            >
              <option value="">Selecione o tipo</option>
              <option value="filme">Filme</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-5 pl-2">
          <InputData
            height={64}
            placeholder={"Data que foi adicionada no site"}
            defaultValue={filmsData.createAt}
            onChange={(e) =>
              setFilmsData({ ...filmsData, createAt: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Data que o filme foi lançado"}
            defaultValue={filmsData.releaseYear}
            onChange={(e) =>
              setFilmsData({ ...filmsData, releaseYear: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Duração do filme em minutos"}
            defaultValue={filmsData.duration}
            onChange={(e) =>
              setFilmsData({ ...filmsData, duration: e.target.value })
            }
            type={"number"}
          />
          <InputData
            height={64}
            placeholder={"Sinopse do filme"}
            defaultValue={filmsData.sinopse}
            onChange={(e) =>
              setFilmsData({ ...filmsData, sinopse: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-end p-10">
        <Button
          height={60}
          width={250}
          title={"Criar"}
          backgroundColor={"#6c63ff"}
        />
      </div>
    </form>
  );
};

export default FormFilms;
