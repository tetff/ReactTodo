import React from 'react';
import CreateItemForm from './createitem/createItemForm';

class CreateItem extends React.Component {
  submit (inputValue) {
    this.props.submit(inputValue);
  }

  render () {
    return (
      <div className='create-item-form-wrapper'>
        <CreateItemForm submit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default CreateItem;
