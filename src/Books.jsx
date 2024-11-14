import { useState } from 'react';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Main } from './pages/Main';
import { Navbar } from './pages/Navbar';
import { ReadingList } from './pages/ReadingList';

export const Books = () => {
  const [rangeValue, setRangeValue] = useState(220);
  const [genreValue, setGenreValue] = useState('Todos');
  const [availableBooks, setAvailableBooks] = useState(0);
  const [selectedBooks, setSelectedBooks] = useState([]);

  // Función para manejar el toggle de libros
  const handleToggleBook = (book) => {
    if (
      selectedBooks.some(
        (selectedBook) => selectedBook.book.ISBN === book.book.ISBN
      )
    ) {
      // Remover de los libros seleccionados
      setSelectedBooks(
        selectedBooks.filter(
          (selectedBook) => selectedBook.book.ISBN !== book.book.ISBN
        )
      );
    } else {
      // Agregar a los libros seleccionados
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  return (
    <>
      <div className='grid grid-cols-3 place-content-center gap-8 h-screen bg-black text-white p-4 font-Sour'>
        <div className='flex flex-col justify-center items-center w-full col-span-2'>
          <Header availableBooks={availableBooks} />
          <Navbar
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
            genreValue={genreValue}
            setGenreValue={setGenreValue}
          />
          <Main
            rangeValue={rangeValue}
            genreValue={genreValue}
            setAvailableBooks={setAvailableBooks}
            selectedBooks={selectedBooks}
            handleToggleBook={handleToggleBook}
          />
        </div>
        <div className='flex flex-col justify-around items-center w-full bg-gray-500 rounded-xl'>
          <ReadingList
            selectedBooks={selectedBooks}
            handleToggleBook={handleToggleBook}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
