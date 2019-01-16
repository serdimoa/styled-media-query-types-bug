import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { size, media } from './styled-helpers'

const BlackBox = styled.div`
  ${size('100px')}
  background: #000;

  ${media.greaterThan('xl')`
    ${size('300px')}
  `}
`;

class App extends Component {
  render() {
    return (
      <BlackBox />
    )
  }
}

export default App;
