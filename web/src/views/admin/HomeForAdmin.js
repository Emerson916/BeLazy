import InputData from "../../components/input";

const HomeForAdmin = () => {
  return (
    <div className="h-full px-10 bg-gradient-to-b from-current to-purple-800">
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
            <InputData placeholder={"Nome do filme"} />
            <InputData placeholder={"Adicione uma URL de uma imagem ( 500 x 600 )"} />
            <InputData placeholder={"Adicione uma URL de uma imagem ( 700 x 400 )"} />
            <InputData placeholder={"Avaliação do público"} />
          </div>
          <div className="flex flex-col space-y-5 pl-2">
            <InputData placeholder={"Data que foi adicionada no site"} />
            <InputData placeholder={"Data que o foi lançado"} />
            <InputData placeholder={"Duração do filme"} />
            <InputData placeholder={"Sinopse do filme"} />
          </div>
        </div>
        <div className="flex justify-end py-10">
          <button className="flex items-center justify-center w-2/6 h-16 p-2 bg-purple-700 rounded-md text-white text-xl font-bold  hover:opacity-75">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default HomeForAdmin;
