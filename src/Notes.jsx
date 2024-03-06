import React, { useState } from "react";

const Notes = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
        // If editing, update the existing task
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = task;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        // If not editing, add a new task
        setTasks([...tasks, task]);
      }

      setTask("");
    }
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add notes"
        />
        <button onClick={handleAddTask}>
          {editingIndex !== null ? "Edit" : "Add"}
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Notes;
