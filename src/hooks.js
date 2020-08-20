import { useState, useEffect } from 'react';

export const useFilter = (items, value) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filtered = items.filter((i) => i.toLowerCase().includes(value.toLowerCase()));
    setFiltered(filtered);
  }, [items, value]);

  return filtered;
};

export const useURLQuery = (search, onLoad, key = 'q') => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get(key);

    if (query) {
      onLoad(query);
    }
  }, [key, onLoad]);

  useEffect(() => {
    if (search) {
      const params = new URLSearchParams();
      params.set(key, search);

      window.history.replaceState(null, '', `?${params}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [key, search]);
};
