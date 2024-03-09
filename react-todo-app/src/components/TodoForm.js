import { useState, useRef, useEffect } from "react";
import "../App.css";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      task: input,
      // isComplete: false,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        className="todo-input"
        placeholder={props.edit ? "Update Todo" : "Add Todo"}
        name="task-text"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="todo-button">
        {props.edit ? "Update" : "Add Todo"}
      </button>
    </form>
  );
};
