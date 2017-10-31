import React from 'react';
import './TodoListItem.scss';

const TodoListItem = (props) => (
  <li styleName="TodoListItem">
    <span styleName="TodoListItem__text">{props.text}</span>
    <span styleName="TodoListItem__delete" onClick={() => props.deleteTodo(props.id)}>x</span>
  </li>
);

export default TodoListItem;
