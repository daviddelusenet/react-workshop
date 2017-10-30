import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.todoFormInput.value.length) {
      const NewTodo = {
        text: this.todoFormInput.value,
        id: Date.now()
      };

      this.props.addTodoToState(NewTodo);
      this.todoFormInput.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={input => this.todoFormInput = input} />
        <button type="submit">Add todo</button>
      </form>
    );
  }
}

export default TodoForm;
