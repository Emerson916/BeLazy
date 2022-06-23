const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="h-16 p-2 bg-[#6C63FF] rounded-md text-white text-xl font-bold hover:opacity-75">
      {title}
    </button>
  );
};

export default Button;
