import React from "react";
import Button from "../Button";
import InputData from "../InputData";

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="flex mb-5">
      <InputData
        width={500}
        height={50}
        defaultValue={value}
        onChange={onChange}
      />
      <div className="ml-5">
        <Button
          width={200}
          height={50}
          title={"Excluir"}
          backgroundColor={"#f00"}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default ListItem;
