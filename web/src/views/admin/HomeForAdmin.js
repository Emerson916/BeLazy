import InputData from "../../components/input";

const HomeForAdmin = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-current to-purple-800">
      <div className="flex p-10">
        <h1 className="text-white text-2xl pr-2">Olá,</h1>
        <p className="text-white text-2xl font-bold">Emerson Admin</p>
      </div>

      <div className="grid grid-cols-2 px-10">
        <InputData placeholder={"ID do filme a ser deletado"} />
        <button className="h-16 w-1/2 ml-10 text-purple-700 rounded-md border-4 border-purple-700 bg-white text-xl font-bold hover:opacity-75">
          Deletar
        </button>
      </div>
    </div>
  );
};

export default HomeForAdmin;
