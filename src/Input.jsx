import { useState } from "react";

const Input = () => {
  const [Todo, setTodo] = useState("");
  const [Note, setNote] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if(Todo.trim() !== ''){
        setNote([...Note, Todo]);
        setTodo('')
    }
  };

  const handleRemove = (index) => {
    const a = [...Note];
     a.splice(index,1)
    setNote(a)
  }

  return (
    <>
      <div>
        <input type="text" value={Todo} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {Note.map((todo, index) => (
            <li key={index}>{todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Input;
