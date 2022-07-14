import { useState } from "react";
import Button from "../../components/Button";
import InputData from "../../components/InputData";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const FormSeries = () => {
  const [seriesData, setSeriesData] = useState({
    imageBanner: "",
    title_video: "",
    evaluation: 0,
    favorite: false,
    releaseYear: "",
    createAt: "",
    sinopse: "",
    type_video: "",
  });

  const navigate = useNavigate();

  const createNewSerie = async () => {
    try {
      await api.post(
        "/v1/serie",
        {
          imageCard: seriesData.imageCard,
          imageBanner: seriesData.imageBanner,
          title_video: seriesData.title_video,
          evaluation: seriesData.evaluation,
          favorite: seriesData.favorite,
          releaseYear: seriesData.releaseYear,
          createAt: seriesData.createAt,
          sinopse: seriesData.sinopse,
          type_video: seriesData.type_video,
        },

        navigate("/addingSeason/")
      );
    } catch (error) {
      console.log("Error do criando Série/Anime", error);
    }
  };

  return (
    <form onSubmit={createNewSerie}>
      <div className="grid grid-cols-2 px-10">
        <div className="flex flex-col space-y-5 pr-2">
          <InputData
            height={64}
            placeholder={"Nome do Anime / Série"}
            defaultValue={seriesData.title_video}
            type={"text"}
            onChange={(e) =>
              setSeriesData({
                ...seriesData,
                title_video: e.target.value,
              })
            }
          />
          <InputData
            height={64}
            placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"}
            defaultValue={seriesData.imageCard}
            onChange={(e) =>
              setSeriesData({ ...seriesData, imageCard: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"}
            defaultValue={seriesData.imageBanner}
            onChange={(e) =>
              setSeriesData({
                ...seriesData,
                imageBanner: e.target.value,
              })
            }
          />
          <div>
            <select
              onChange={(e) =>
                setSeriesData({
                  ...seriesData,
                  type_video: e.target.value,
                })
              }
              className="w-full h-12 mt-2 focus:outline-none rounded-md"
            >
              <option value="">Selecione o tipo</option>
              <option value="serie">Série</option>
              <option value="anime">Anime</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-5 pl-2">
          <InputData
            height={64}
            placeholder={"Data que foi adicionada no site"}
            defaultValue={seriesData.createAt}
            onChange={(e) =>
              setSeriesData({ ...seriesData, createAt: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={`Data que o Anime/Série foi lançado`}
            defaultValue={seriesData.releaseYear}
            onChange={(e) =>
              setSeriesData({
                ...seriesData,
                releaseYear: e.target.value,
              })
            }
          />
          <InputData
            height={64}
            placeholder={"Sinopse do Anime / Série"}
            defaultValue={seriesData.sinopse}
            onChange={(e) =>
              setSeriesData({ ...seriesData, sinopse: e.target.value })
            }
          />
          <InputData
            height={64}
            placeholder={"Avaliação do público"}
            defaultValue={seriesData.evaluation}
            onChange={(e) =>
              setSeriesData({ ...seriesData, evaluation: e.target.value })
            }
            type={"number"}
          />
        </div>
      </div>
      <div className="flex justify-end p-10">
        <Button
          height={60}
          width={250}
          title={"Adicionar temporada"}
          backgroundColor={"#6c63ff"}
          className="w-[220px] inline-block p-2 h-[300px] cursor-pointer hover:scale-95 ease-in-out duration-300 hover:opacity-80"
        />
      </div>
    </form>
  );
};

export default FormSeries;
