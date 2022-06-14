import logo from "../assets/img/logo.svg";
import imageScreenLogin from "../assets/img/imageScreenLogin.svg";
import register from "../assets/img/register.svg";
import Button from "../components/button";
import InputData from "../components/input";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-current to-purple-800 grid grid-cols-2">
      <div className="space-y-20">
        <div className="ml-40">
          <img src={logo} alt="Logo do site" />
        </div>

        <h1 className="text-white text-2xl font-bold ml-40">Faça seu login</h1>

        <div className="flex flex-col items-center space-y-5 bottom-0">
          <InputData placeholder="Digite seu e-mail" />
          <InputData placeholder="Digite sua senha" />
          <Button title="Entrar" />
        <div className="flex">
          <img src={register} alt="Logo do site" />
          <p className="text-white">Registre-se</p>
        </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src={imageScreenLogin} alt="Imagem ao lado dos campos de login" />
      </div>
    </div>
  );
};

export default Login;
