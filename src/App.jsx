import React, { useState, useCallback } from 'react';

import { Container, Input, Item } from './Components';
import { useFilter, useURLQuery, useData } from './hooks';
import { mockedFetch } from './data';

const App = () => {
  const { response, loading } = useData(mockedFetch);

  const [search, setSearch] = useState('');

  const onChangeSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filtered = useFilter(response, search);

  useURLQuery(search, setSearch);

  if (loading) {
    return null;
  }

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
