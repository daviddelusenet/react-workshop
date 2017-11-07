import React   from 'react';
import styled  from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Title>hi</Title>
    );
  }
}

export default App;
