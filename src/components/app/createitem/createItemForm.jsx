import React from 'react';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  submit () {
    console.log('ELküldve');
  }

  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }

  render () {
    return (
      <form>
        <input type='text' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} placeholder='Enter new item' />
        <button type='submit' onClick={this.submit}>Need to do</button>
        {this.state.inputValue}
      </form>
    );
  }
}

export default CreateItemForm;
