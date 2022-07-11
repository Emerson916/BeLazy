import { useState } from "react";
import Button from "../../components/Button";
import InputData from "../../components/InputData";
import ListEpisodes from "../../components/ListEpisodes/ListEpisodes";
import Footer from "../../layout/Footer";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const AddingSeason = () => {
  const { id } = useParams();
  const [seasonData, setSeasonData] = useState({
    number_season: 0,
    imageCard: "",
    episodes: [{}],
  });
  const createNewSerie = async () => {
    try {
      await api.post(
        "/v1/season",
        {
          id_series: id,
          number_season: seasonData.number_season,
          imageCard: seasonData.imageCard,
          episodes: seasonData.episodes,
        },
        alert("Série/Anime adicionado com sucesso")
      );
    } catch (error) {
      alert("Não foi possível adicionar uma Série/Anime!!");
      console.log("Error do criando Série/Anime", error);
    }
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-current to-purple-800">
        <div className="flex p-10">
          <h1 className="text-white text-2xl pr-2">Olá,</h1>
          <p className="text-white text-2xl font-bold">Emerson Admin</p>
        </div>

        <div className="grid grid-cols-2 px-10">
          <div className="flex flex-col space-y-5 pr-2">
            <InputData
              height={64}
              placeholder={"N° da temporada"}
              defaultValue={setSeasonData}
              type={"number"}
              onChange={(e) =>
                setSeasonData({ ...seasonData, number_season: e.target.value })
              }
            />

            <ListEpisodes />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold mx-2">
              Adicione uma URL de uma imagem ( 500 x 600 )
            </label>
            <InputData
              width={140}
              defaultValue={setSeasonData}
              type={"file"}
              onChange={(e) =>
                setSeasonData({ ...seasonData, imageCard: e.target.value })
              }
            />
          </div>
          <Button
            title={"Criar"}
            backgroundColor={"#6c63ff"}
            height={50}
            width={250}
            onClick={() => {
              createNewSerie();
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddingSeason;
