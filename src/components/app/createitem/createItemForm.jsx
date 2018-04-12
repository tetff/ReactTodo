import React from 'react';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  submit () {
    this.props.submit(this.state.inputValue);
  }

  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }

  render () {
    return (
      <form>
        <input type='text' onChange={this.changeInputValue.bind(this)} placeholder='Enter new item' />
        <button type='button' onClick={this.submit.bind(this)}>Need to do</button>
      </form>
    );
  }
}

export default CreateItemForm;
