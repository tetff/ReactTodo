import React from 'react';
import CreateItemForm from './createitem/createItemForm';

class CreateItem extends React.Component {
  render () {
    return (
      <div className='create-item-form-wrapper'>
        <CreateItemForm />
      </div>
    );
  }
}

export default CreateItem;
