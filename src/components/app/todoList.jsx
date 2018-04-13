import React from 'react';
import TodoItem from './todolist/todoItem';

class TodoList extends React.Component {
  delete (label) {
    this.props.delete(label);
  }

  render () {
    let toDos = this.props.toDos.map(toDo => {
      return <TodoItem toDo={toDo} key={toDo} delete={this.delete.bind(this)} />;
    });

    return (
      <div className='todo-item-wrapper'>
        {toDos}
      </div>
    );
  }
}

export default TodoList;
