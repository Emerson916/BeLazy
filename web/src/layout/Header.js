import logo from "../assets/img/logo.svg"
import iconMenu from "../assets/img/iconMenu.svg"

const Header = () => {
  return (
    <div className="w-full h-24 bg-gray-900 flex justify-between items-center px-10 fixed z-10">
        <img src={logo} alt="Logo do site" className="h-20 w-20 cursor-pointer"/>
        <img src={iconMenu} alt="Logo do site" className="h-10 w-10 cursor-pointer"/>
    </div>
  );
};
export default Header;