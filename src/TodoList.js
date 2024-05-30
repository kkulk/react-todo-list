import React from 'react';
import Todo from './Todo';

export default function TodoListFunc({ todos, toggleTodo, editTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} />
      ))}
    </>
  );
}
