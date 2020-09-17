import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import styled from 'styled-components'

const TodoHeader = styled.h1`
  font-size: 36px;
  color: green;
`

const Header = ({ addTodo }) => (
  <header className="header">
    <TodoHeader>Todos</TodoHeader>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
