import React from "react";

const InputData = ({ placeholder, value, onChangeText, password }) => {
  return (
      <input
        className="h-16 w-3/5 p-2 rounded-md border-none focus:outline-none"
        placeholder={placeholder}
        placeholderTextColor="#343746"
        //pegando o valor dos state (email e password)
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
  );
};

export default InputData;
