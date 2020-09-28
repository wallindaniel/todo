import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoTextInput extends Component {

  state = {
    param: 'todoTextInput params'
  }

  render() {
    return (
      <input type="text" value={this.state.param} />
    )
  }
}

TodoTextInput.propTypes = {};
