import React     from 'react';

// Import child components
import TodoForm  from 'TodoForm/TodoForm';
import TodoList  from 'TodoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.addTodoToState = this.addTodoToState.bind(this);

    // Set initial state
    this.state = {
      todos: []
    }
  }

  addTodoToState(newTodo) {
    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)
    }));
  }

  render() {
    return [
      <TodoForm key="TodoForm" addTodoToState={this.addTodoToState} />,
      <TodoList key="TodoList" todos={this.state.todos} />
    ];
  }
}

export default App;
