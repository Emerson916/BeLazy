import React, { useState } from "react";
import ListItem from "./ListItem";
import NewTaskInput from "./NewTaskInput";

const ListEpisodes = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, episode: task });
    setTasks(itensCopy);
  }

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, episode: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div>
      <NewTaskInput onSubmit={addNewTask} />
      {tasks.map(({ id, episode }, index) => (
        <ListItem
          key={id}
          value={episode}
          onChange={(event) => updateTask(event, index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default ListEpisodes;
