import React from "react";

const InputData = ({
  placeholder,
  defaultValue,
  onChange,
  type,
  disabled,
  required,
  height,
  width,
}) => {
  return (
    <input
      style={{ height, width }}
      className="p-2 rounded-md border-none focus:outline-none"
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  );
};

export default InputData;
