import React from "react";

const InputData = ({ placeholder, defaultValue, onChange, type }) => {
  return (
    <input
      className="h-16 p-2 rounded-md border-none focus:outline-none"
      placeholder={placeholder}
      // pegando o valor dos state (email e password)
      defaultValue={defaultValue}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputData;
