import React from 'react';
import './TodoList.scss';

const TodoList = (props) => (
  <ul styleName="TodoList">
    {props.todos.map(todo => (
      <li styleName="TodoList__item" key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

export default TodoList;
