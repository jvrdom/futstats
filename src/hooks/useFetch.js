import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);

  return { response, error };
}
