import React from 'react';
import TodoItem from './todoItem';

class App extends React.Component {
  render () {
    return (
      <ul>
        <TodoItem label='First Task' />
        <TodoItem label='Second Task' />
        <TodoItem label='Third Task' />
      </ul>
    );
  }
}
export default App;
