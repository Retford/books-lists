import { useEffect } from 'react';
import { CardBook } from '../components/CardBook';
import { useFetch } from '../fetch/dataFetch';

export const Main = ({
  rangeValue,
  genreValue,
  setAvailableBooks,
  toggleButton,
  setToggleButton,
}) => {
  const books = useFetch('/src/data/books.json');

  const numBooksPages = books.filter((book) => {
    if (
      book.book.pages > rangeValue ||
      (book.book.genre !== genreValue && genreValue !== 'Todos')
    )
      return;
    return book;
  });

  // Chane Available Books
  useEffect(() => {
    setAvailableBooks(numBooksPages.length);
  }, [numBooksPages]);

  console.log(toggleButton);

  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-8  max-h-[650px] overflow-x-hidden overflow-y-scroll my-6'>
      {numBooksPages.map((book) => (
        <CardBook
          key={book.book.ISBN}
          {...book}
          toggleButton={toggleButton}
          setToggleButton={setToggleButton}
        />
      ))}
    </div>
  );
};
