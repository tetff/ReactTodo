import React from 'react';
import TodoItem from './todolist/todoItem';

class TodoList extends React.Component {
  render () {
    let toDos = this.props.toDos.map(element => {
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
