const Button = ({ title }) => {
  return (
    <button className="h-16 w-3/5 p-2 bg-purple-700 rounded-md text-white text-xl font-bold hover:opacity-75">
      {title}
    </button>
  );
};

export default Button;