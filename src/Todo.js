import React from 'react';
export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    console.log('toggleTodo is a function:', typeof toggleTodo === 'function'); // Should log true
    console.log('todo.id:', todo.id); // Should log the todo id
    toggleTodo(todo.id); // Ensure this line is correct
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  );
}
