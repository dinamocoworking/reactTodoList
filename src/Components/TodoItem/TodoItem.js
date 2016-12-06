import React, { Component } from 'react';

class TodoItem extends Component {

  constructor() {
    super();
    this.remove = this.remove.bind(this)
  }

  remove() {
    this.props.onRemoveItem(this.props.index);
  }


  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <span>edit</span> ____
        <span onClick={this.remove}>remove</span>
      </div>
    );
  }
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  //onRemoveItem: React.PropTypes.function
};

export default TodoItem;
