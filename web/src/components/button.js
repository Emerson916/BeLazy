const Button = ({ title, onClick, width, height, backgroundColor }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ width, height, backgroundColor }}
        className="p-2 flex justify-center items-center rounded-md text-white text-xl font-bold hover:opacity-75"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
