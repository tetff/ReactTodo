import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { toDos: [] };
  }

  submit (inputValue) {
    let toDoArray = this.state.toDos;
    toDoArray.push({label: inputValue});
    this.setState({toDos: toDoArray});
  }

  render () {
    return (
      <div className='todo-list-wrapper'>
        <TodoList toDos={this.state.toDos} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default App;
