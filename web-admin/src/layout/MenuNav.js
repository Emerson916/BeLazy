const MenuNav = ({ menuOpen }) => {
  return (
    <>
      <div
        className={`${
          menuOpen ? "w-1/2" : "w-0 border-none duration-700"
        } border-r-2 border-b-2 bg-gradient-to-b from-[#303C76] to-purple-[#6C63FF] rounded-br-[30px] h-[80px]  z-10 flex `}
      ></div>
    </>
  );
};
export default MenuNav;
