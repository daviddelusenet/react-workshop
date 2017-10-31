import React from 'react';
import './TodoList.scss';

// Import child components
import TodoListItem from './TodoListItem/TodoListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    this.props.deleteTodoFromState(id);
  }

  render() {
    return (
      <ul styleName="TodoList">
        {this.props.todos.map(todo => (
          <TodoListItem key={todo.id} {...todo} deleteTodo={this.deleteTodo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
