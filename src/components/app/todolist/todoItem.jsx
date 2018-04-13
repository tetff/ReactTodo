import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isDone: true
    };
  }

  /* changeDone () {
    this.setState({ isDone: !this.state.isDone });
    this.props.changeDone(this.state.isDone);
  }
 */

  delete () {
    this.props.delete(this.props.toDo.label);
  }

  render () {
    return (
      <li>
        <button type='button' onClick={this.delete.bind(this)}>Delete</button>
        {this.props.toDo.label}
      </li>
    );
  }
}

export default TodoItem;
