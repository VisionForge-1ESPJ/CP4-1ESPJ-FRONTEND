import { useState } from "react";
function TodoInput({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    if (input.trim() === "") return;

    onAddTask(input.trim());
    setInput("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="todo-input"><input type="text"placeholder="O que precisa ser feito?"value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}/>
      <button onClick={handleSubmit}>        +
      </button></div>  );
}
export default TodoInput;