function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Desfazer" : "Concluir"}
        </button>

        <button onClick={() => onDelete(task.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TodoItem;