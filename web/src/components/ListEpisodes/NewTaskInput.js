import React, { useState } from "react";
import InputData from "../InputData";
import Button from "../Button";
const NewTaskInput = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function setNewTask({ target }) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <form onSubmit={submit} className="flex my-5">
      <InputData
        width={500}
        height={50}
        placeholder="Titulo do episodio"
        onChange={setNewTask}
      />
      <div className="ml-5">
        <Button
          width={200}
          height={50}
          backgroundColor={"#6C63FF"}
          title="Adicinar"
          type="submit"
        />
      </div>
    </form>
  );
};

export default NewTaskInput;
