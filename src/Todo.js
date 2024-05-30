import React, { useState } from 'react';

export default function Todo({ todo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate || '');

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    console.log('Saving changes:', todo.id, newName, newDueDate);
    editTodo(todo.id, newName, newDueDate);
    setIsEditing(false);
  }

  function handleCancelClick() {
    console.log('Cancelling changes:');
    setIsEditing(false);
    setNewName(todo.name);
    setNewDueDate(todo.dueDate || '');
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleTodoClick}
          />
          {todo.name} (Due: {todo.dueDate})
          <button onClick={handleEditClick}>Edit</button>
        </label>
      )}
    </div>
  );
}
