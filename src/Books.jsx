import { useState } from 'react';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Main } from './pages/Main';
import { Navbar } from './pages/Navbar';
import { ReadingList } from './pages/ReadingList';

export const Books = () => {
  const [rangeValue, setRangeValue] = useState(220);
  const [genreValue, setGenreValue] = useState('Todos');
  const [availableBooksLength, setAvailableBooksLength] = useState(0);
  const [readBooks, setReadBooks] = useState(0);
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
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:place-content-center lg:h-new-screen gap-8 bg-black text-white p-4 font-Sour'>
        <div className='flex h-[650px] flex-col justify-center items-center w-full sm:max-h-[700px] col-span-2'>
          <Header
            availableBooksLength={availableBooksLength}
            readBooks={readBooks}
          />
          <Navbar
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
            genreValue={genreValue}
            setGenreValue={setGenreValue}
          />
          <Main
            rangeValue={rangeValue}
            genreValue={genreValue}
            setAvailableBooksLength={setAvailableBooksLength}
            setReadBooks={setReadBooks}
            selectedBooks={selectedBooks}
            handleToggleBook={handleToggleBook}
          />
        </div>
        <div className='flex px-4 h-[400px] flex-col justify-between sm:justify-around items-center w-full sm:max-h-[700px] bg-gray-500 rounded-xl lg:h-[650px] lg:justify-start'>
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
