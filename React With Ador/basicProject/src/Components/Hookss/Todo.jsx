import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState();
  const [warning, setWarning] = useState();

  handleInput = (e) => {
    const input = e.target.value;
    const updatedWarning = input.includes(".js")
      ? "You need JS skill to complete the task. Do you have it?"
      : null;
    setTodo(inputValue);
    setWarning(updatedWarning);
  };

  return (
    <div>
      <h1>Todo</h1>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <h2>{warning || "Good Choice!"}</h2>
    </div>
  );
}
export default Todo;
