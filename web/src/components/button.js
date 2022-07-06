const Button = ({ title, onClick, width, height, backgroundColor, fontSize }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ width, height, backgroundColor, fontSize}}
        className="p-2 flex justify-center items-center rounded-md text-white font-bold hover:opacity-75"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
