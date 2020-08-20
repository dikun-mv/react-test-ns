import React, { useState, useCallback } from 'react';

import { Container, Input, Item } from './Components';
import { useFilter, useURLQuery } from './hooks';
import data from './data';

const App = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filtered = useFilter(data, search);

  useURLQuery(search, setSearch);

  return (
    <Container>
      <Input onChange={onChangeSearch} value={search} type='text' />
      {filtered.map((i) => (
        <Item key={i} children={i} />
      ))}
    </Container>
  );
};

export default App;
