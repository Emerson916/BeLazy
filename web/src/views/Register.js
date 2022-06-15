import logo from "../assets/img/logo.svg";
import imageScreenRegister from "../assets/img/imageScreenRegister.svg";
import register from "../assets/img/register.svg";
import Button from "../components/button";
import InputData from "../components/input";
import { Link } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate()

  return (
    <div className="h-screen bg-gradient-to-b from-current to-purple-800 grid grid-cols-2">
      <div className="flex flex-col w-2/3 mx-auto relative">
        <div className="mt-5">
          <img src={logo} alt="Logo do site" />
        </div>

        <div className="w-full flex flex-col flex-wrap space-y-5 absolute bottom-16">
          <h1 className="text-white text-2xl font-bold mb-5">
            Faça seu Registro
          </h1>
          <InputData placeholder="Digite seu nome" />
          <InputData placeholder="Digite sua e-mail" />
          <InputData placeholder="Digite sua senha" />
          <Button title="Registrar" />
          <div className="flex justify-end m-2">
            <img src={register} alt="Logo do site" />
            <Link className="text-white p-2" to="/">
              Fazer login
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <img
          src={imageScreenRegister}
          alt="Imagem ao lado dos campos de login"
        />
      </div>
    </div>
  );
};

export default Register;
