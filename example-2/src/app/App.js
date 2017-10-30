import React    from 'react';

// Import child components
import TodoForm from 'TodoForm/TodoForm';
import TodoList from 'TodoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      todos: []
    }
  }

  render() {
    return [
      <TodoForm key="TodoForm" />,
      <TodoList key="TodoList" />
    ];
  }
}

export default App;
