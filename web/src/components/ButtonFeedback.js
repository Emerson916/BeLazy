import { useState } from "react";

const ButtonFeedback = ({ IconSvg, IconFill, title }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    // onPress={handleChecked}
    <div
      className="w-1/3 h-10 bg-[#6c63ff] flex items-center mt-5 mx-1 rounded-[5px] cursor-pointer hover:opacity-70"
      onClick={handleChecked}
    >
      {!checked ? (
        <img src={IconSvg} alt="Icon preenchido" className="h-6 w-6 mx-2" />
      ) : (
        <img
          src={IconFill}
          alt="Icon sem estar preenchido"
          className="h-6 w-6 mx-2"
        />
      )}
      <h2 className="text-white text-sm">{title}</h2>
    </div>
  );
};

export default ButtonFeedback;
