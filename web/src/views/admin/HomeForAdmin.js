import { useState } from "react";
import Footer from "../../layout/Footer";
import FormFilms from "../../components/forms/FormFilms";
import FormSeries from "../../components/forms/FormSeries";

const HomeForAdmin = () => {
  const [selectValue, setSelectValue] = useState("filme");

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

      {selectValue === "filme" ? <FormFilms /> : <FormSeries />}
      <Footer />
    </div>
  );
};

export default HomeForAdmin;
