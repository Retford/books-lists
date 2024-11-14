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
          />
        </div>
        <div className='flex flex-col justify-around items-center w-full bg-gray-500 rounded-xl'>
          <ReadingList />
        </div>
      </div>
      <Footer />
    </>
  );
};
