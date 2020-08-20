import { useState, useEffect } from 'react';

export const useFilter = (items, value) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filtered = items.filter((i) => i.toLowerCase().includes(value.toLowerCase()));
    setFiltered(filtered);
  }, [items, value]);

  return filtered;
};
