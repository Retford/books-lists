import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [books, setBooks] = useState([]);
  const dataFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { library } = data;
    setBooks(library);
  };

  useEffect(() => {
    dataFetch();
  }, [url]);

  return books;
};
