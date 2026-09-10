import { useState } from "react";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <TodoInput onAdd={addTask} />

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;