import { useEffect, useState } from "react";
import InputData from "../../components/InputData";
import Footer from "../../layout/Footer";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

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
    type_video: "",
  });

  const [selectValue, setSelectValue] = useState("filme");
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
        alert("Série/Anime adicionado com sucesso")
      );
      navigate(`/addingSeason/${seriesData?.id}`);
    } catch (error) {
      alert("Não foi possível adicionar uma Série/Anime!!");
      console.log("Error do criando Série/Anime", error);
    }
  };

  useEffect(() => {
    async function getSeries() {
      try {
        const response = await api.get("/v1/series/");

        setSeriesData(response.data);
      } catch (error) {
        console.log("Erro da requisição get", error);
      }
    }

    getSeries();
  }, []);

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

  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-b from-current to-purple-800">
      <div className="flex p-10">
        <h1 className="text-white text-2xl pr-2">Olá,</h1>
        <p className="text-white text-2xl font-bold">Emerson Admin</p>
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
      ) : (
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
              onClick={() => {
                navigate(`/addingSeason/${seriesData[0]?.id}`);
              }}
              className="w-[220px] inline-block p-2 h-[300px] cursor-pointer hover:scale-95 ease-in-out duration-300 hover:opacity-80"
            />
            {console.log("cade o id ", seriesData)}
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default HomeForAdmin;
