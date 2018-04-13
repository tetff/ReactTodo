import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/createItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toDos: []
    };
  }

  delete (label) {
    console.log(label);
    let toDos = this.state.toDos;
    let i = 0;
    while (i < toDos.length && toDos[i].label !== label) {
      i++;
    }
    console.log(i);
    if (i < toDos.length) {
      toDos.splice(i, 1);
      this.setState({toDos: toDos});
    }
  }

  submit (inputValue) {
    let toDoArray = this.state.toDos;
    toDoArray.push({label: inputValue});
    this.setState({toDos: toDoArray});
  }

  render () {
    return (
      <div className='todo-list-wrapper'>
        <h1>My to do list</h1>
        <TodoList toDos={this.state.toDos} delete={this.delete.bind(this)} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default App;
