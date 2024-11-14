/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { CardBook } from '../components/CardBook';
import { useFetch } from '../fetch/dataFetch';

export const Main = ({
  rangeValue,
  genreValue,
  setAvailableBooks,
  setReadBooks,
  selectedBooks,
  handleToggleBook,
}) => {
  const [toggleButton, setToggleButton] = useState(true);

  const books = useFetch('/books-lists/src/data/books.json');

  const numBooksPages = books.filter((book) => {
    if (
      book.book.pages > rangeValue ||
      (book.book.genre !== genreValue && genreValue !== 'Todos')
    )
      return false;
    return book;
  });

  // Filtrar los libros que no están seleccionados
  const availableBooks = numBooksPages.filter(
    (book) =>
      !selectedBooks.some(
        (selectedBook) => selectedBook.book.ISBN === book.book.ISBN
      )
  );

  // Change Available Books
  useEffect(() => {
    setAvailableBooks(availableBooks.length);
    setReadBooks(selectedBooks.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numBooksPages, availableBooks]);

  return (
    <div className='flex items-center justify-center flex-wrap overflow-y-hidden overflow-x-scroll flex-col w-full gap-8  max-h-[650px] sm:flex-row sm:overflow-x-hidden sm:overflow-y-scroll my-6'>
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
