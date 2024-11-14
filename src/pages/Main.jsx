/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { CardBook } from '../components/CardBook';
import { useFetch } from '../fetch/dataFetch';

export const Main = ({
  rangeValue,
  genreValue,
  setAvailableBooks,
  selectedBooks,
  handleToggleBook,
}) => {
  const [toggleButton, setToggleButton] = useState(true);

  const books = useFetch('/src/data/books.json');

  const numBooksPages = books.filter((book) => {
    if (
      book.book.pages > rangeValue ||
      (book.book.genre !== genreValue && genreValue !== 'Todos')
    )
      return false;
    return book;
  });

  // Change Available Books
  useEffect(() => {
    setAvailableBooks(numBooksPages.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numBooksPages]);

  // Filtrar los libros que no están seleccionados
  const availableBooks = numBooksPages.filter(
    (book) =>
      !selectedBooks.some(
        (selectedBook) => selectedBook.book.ISBN === book.book.ISBN
      )
  );

  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-8  max-h-[650px] overflow-x-hidden overflow-y-scroll my-6'>
      {availableBooks.map((book) => (
        <CardBook
          key={book.book.ISBN}
          {...book}
          toggleButton={toggleButton}
          setToggleButton={setToggleButton}
          handleToggle={() => handleToggleBook(book)}
          isSelected={selectedBooks.some(
            (selectedBook) => selectedBook.book.ISBN === book.book.ISBN
          )}
        />
      ))}
    </div>
  );
};
