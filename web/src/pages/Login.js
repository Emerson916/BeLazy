import logo from "../assets/img/logo.svg";
import imageScreenLogin from "../assets/img/imageScreenLogin.svg";
import register from "../assets/img/register.svg";
import Button from "../components/Button";
import InputData from "../components/InputData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen bg-gradient-to-b from-current to-purple-800 grid grid-cols-2">
      <div className="flex flex-col w-2/3 mx-auto relative">
        <div className="mt-5">
          <img src={logo} alt="Logo do site" />
        </div>

        <div className="w-full flex flex-col flex-wrap space-y-5 absolute bottom-16">
          <h1 className="text-white text-2xl font-bold mb-5">Faça seu login</h1>
          <InputData
            height={64}
            placeholder="Digite seu e-mail"
            defaultValue={email}
            onChange={(t) => setEmail(t)}
          />
          <InputData
            height={64}
            placeholder="Digite sua senha"
            type={"password"}
            defaultValue={password}
            onChange={(t) => setPassword(t)}
          />
          <Button
            title="Entrar"
            height={"64px"}
            width={"100%"}
            fontSize={"22px"}
            backgroundColor={"#6C63FF"}
            onClick={() => navigate("/app/home")}
          />
          <div className="flex justify-end m-2 cursor-pointer">
            <img src={register} alt="Logo do site" />
            <p
              className="text-white p-2 "
              onClick={() => navigate("/register")}
            >
              Registre-se
            </p>
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
