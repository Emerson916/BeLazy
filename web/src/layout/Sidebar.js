import Button from "../components/Button";
// import fotoPerfil from "../assets/img/addPerfil.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import perfil from "../assets/img/perfil.svg";

const Sidebar = ({ menuOpenFunction, menuOpen }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => {
          menuOpenFunction();
        }}
      >
        <div className="h-10 w-10 bg-colors-primary-color rounded-md "></div>
        {menuOpen ? (
          <MdOutlineKeyboardArrowDown className="text-white" />
        ) : (
          <MdOutlineKeyboardArrowUp className="text-white" />
        )}
      </div>

      <div
        className={`${
          menuOpen ? "h-96 " : "h-0 border-none duration-700"
        } w-72 bg-[#343746] absolute right-10 top-28 bottom-24 z-10 rounded-md`}
      >
        <ul className={`${menuOpen ? "flex flex-col" : "hidden"}`}>
          <p className="text-white text-base font-bold mx-5">Troca de conta</p>

          <div className="flex items-center m-5">
            <div className="flex items-center justify-center bg-colors-primary-color h-10 w-10 rounded-md">
              <img src={perfil} alt="Foto de perfil do usuário" />
            </div>
            <p className="text-white text-base font-bold mx-5">Emerson Silva</p>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-white text-base font-bold mx-5">Configurações</p>
            <div className="h-full border-t-2 border-white">
              <div className="flex flex-col h-full ">
                <ul className="hover:bg-gray-500 cursor-pointer">
                  <p className="text-white text-base mx-5 m-2">Sua conta</p>
                </ul>
                <ul className="hover:bg-gray-500 cursor-pointer">
                  <p className="text-white text-base mx-5 m-2">Suporte</p>
                </ul>
              </div>
              <div className="flex flex-col items-center mt-10">
                <Button
                  title={"sair"}
                  width={200}
                  height={35}
                  backgroundColor={"#303C76"}
                />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
