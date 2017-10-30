import React from 'react';
import './TodoList.scss';

const TodoList = (props) => (
  <ul styleName="TodoList">
    {props.todos.map(todo => (
      <li styleName="TodoList__item" key={todo.id}>{todo.text}</li>
    ))}
    <li styleName="TodoList__item">Wow zo sick</li>
  </ul>
);

export default TodoList;
