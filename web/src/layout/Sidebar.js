import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import fotoPerfil from "../assets/img/addPerfil.svg";

const MenuNavBar = ({menuOpenFunction, menuOpen}) => {
//   const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" h-10 w-10"
        onClick={() => {
          menuOpenFunction()
        }}
      >
        <ul className="flex flex-col space-y-2 rotate-180 cursor-pointer">
          <li
            className={`${
              menuOpen ? "w-3" : ""
            }  border-2 border-[#6C63FF] h-1`}
          />
          <li
            className={`${
              menuOpen ? "w-6" : "w-7"
            }  border-2 border-[#6C63FF] h-1`}
          />
          <li
            className={`${
              menuOpen ? "" : "w-3"
            }  border-2 border-[#6C63FF] h-1`}
          />
        </ul>
      </div>

      <div
        className={`${
          menuOpen ? "w-72 " : "w-0 border-none duration-700"
        } border-l-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-bl-[30px] absolute right-0 top-24 bottom-24 z-10`}
      >
        <ul className={`${menuOpen ? "flex flex-col items-center" : "hidden"}`}>
          <li className="w-16 h-16 border-[3px] my-6 rounded-full flex justify-center items-center cursor-pointer hover:opacity-50">
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
              onClick={() => navigate("/")}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuNavBar;
