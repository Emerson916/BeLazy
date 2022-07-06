import logo from "../assets/img/logo.svg";
import iconMenu from "../assets/img/iconMenu.svg";
import fotoPerfil from "../assets/img/addPerfil.svg";
import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="w-full h-24 bg-gray-900 flex justify-between items-center px-10">
      <img
        src={logo}
        alt="Logo do site"
        className="h-[120px] w-[120px] cursor-pointer"
      />
      <img
        src={iconMenu}
        alt="logo"
        className="cursor-pointer w-10"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />

      <div
        className={`${
          menuOpen ? "w-72 " : "w-0 border-none duration-700"
        } border-l-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-bl-[30px] absolute right-0 top-24 bottom-24 z-10`}
      >
        <ul className={`${menuOpen ? "flex flex-col items-center" : "hidden"}`}>
          <li className="w-16 h-16 border-[3px] my-6 rounded-full flex justify-center items-center cursor-pointer">
            <img src={fotoPerfil} alt="foto do perfil" />
          </li>
          <li className="text-white text-1xl font-bold flex truncate">
            Emerson User
          </li>
          <li className="text-white text-1xl font-bold flex truncate">
            beLazy@gmail.com
          </li>
          <li className="my-5 mt-20">
            <Button
              height={"35px"}
              width={"250px"}
              backgroundColor={"#6C63FF"}
              title={"Editar Perfil"}
            />
          </li>
          <li>
            <Button
              height={"35px"}
              width={"250px"}
              backgroundColor={"#6C63FF"}
              title={"Configurações"}
            />
          </li>
          <li className="my-5">
            <Button
              height={"35px"}
              width={"250px"}
              icon={iconMenu}
              backgroundColor={"#6C63FF"}
              title={"Virar Premium"}
            />
          </li>
          <li className="mt-5">
            <Button
              height={"35px"}
              width={"250px"}
              backgroundColor={"#303C76"}
              title={"Sair"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
