import logo from "../assets/img/logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuOpenFunction() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className="w-full h-24 bg-gray-900 flex justify-between items-center px-10">
        <div>
          <img
            src={logo}
            alt="Logo do site"
            className="h-[120px] w-[120px] cursor-pointer"
          />
        </div>
        <div>
          <Sidebar menuOpenFunction={menuOpenFunction} menuOpen={menuOpen} />
        </div>
      </div>
    </>
  );
};
export default Header;
