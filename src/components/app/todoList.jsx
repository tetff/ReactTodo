import React from 'react';
import TodoItem from './todolist/todoItem';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = { toDos: [
      {label: 'Sör'},
      {label: 'Bor'},
      {label: 'Pálinka'}
    ] };
  }

  render () {
    let toDos = this.state.toDos.map(element => {
      return <TodoItem label={element.label} key={element.label} />;
    });

    return (
      <div className='todo-item-wrapper'>
        {toDos}
      </div>
    );
  }
}

export default TodoList;
