import React     from 'react';

// Import child components
import TodoForm  from 'TodoForm/TodoForm';
import TodoList  from 'TodoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.addTodoToState = this.addTodoToState.bind(this);
    this.deleteTodoFromState = this.deleteTodoFromState.bind(this);

    // Set initial state
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    if (localStorage.getItem('example-5-todos')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('example-5-todos'))
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('example-5-todos', JSON.stringify(this.state.todos));
  }

  addTodoToState(newTodo) {
    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)
    }));
  }

  deleteTodoFromState(id) {
    const UpdatedTodos = this.state.todos;

    for (let i = 0; i < UpdatedTodos.length; i++) {
      if (UpdatedTodos[i].id === id) {
        UpdatedTodos.splice(i, 1);
        return;
      }
    }

    this.setState({
      todos: UpdatedTodos
    });
  }

  render() {
    return [
      <TodoForm key="TodoForm" addTodoToState={this.addTodoToState} />,
      <TodoList key="TodoList" todos={this.state.todos} deleteTodoFromState={this.deleteTodoFromState} />
    ];
  }
}

export default App;
