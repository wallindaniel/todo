import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.main`
  box-shadow: 0 0 25px 10px #555;
  border: 20px solid hotpink;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: salmon;
  height: 100%;
`;

const MainSection = function () {
  return (
    <Main>
      <p>Main section</p>
    </Main>
  )
};

MainSection.propTypes = {}

export default MainSection;