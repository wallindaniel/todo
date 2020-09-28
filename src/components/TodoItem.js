import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

  state = {
    param: 'todo object params'
  }

  render() {
    return (
      <li>
        <p>Todo item</p>
        <p>{this.state.param}</p>
      </li>
    )
  }
}

TodoItem.propTypes = {};
