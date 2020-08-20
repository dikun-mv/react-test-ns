import React from 'react';

import { Container, Input, Item } from './Components';
import data from './data';

const App = () => {
  return (
    <Container>
      <Input type='text' />
      {data.map((d) => (
        <Item key={d} children={d} />
      ))}
    </Container>
  );
};

export default App;
