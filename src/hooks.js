import { useState, useEffect, useRef } from 'react';

export const useFilter = (items, value) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (items) {
      const filtered = items.filter((i) => i.toLowerCase().includes(value.toLowerCase()));
      setFiltered(filtered);
    }
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

export const useData = (fetcher) => {
  const isMounted = useRef(true);

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher()
      .then((res) => {
        if (isMounted.current) {
          setResponse(res);
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted.current) {
          setLoading(false);
        }
      });

    return () => {
      isMounted.current = false;
    };
  }, [fetcher]);

  return { response, error, loading };
};
