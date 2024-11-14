/* eslint-disable react/prop-types */
import { useFetch } from '../fetch/dataFetch';

export const Navbar = ({
  rangeValue,
  setRangeValue,
  genreValue,
  setGenreValue,
}) => {
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setGenreValue(e.target.value);
  };
  const books = useFetch('../data/books.json');

  const allGenresBooks = books.map((book) => book.book.genre);

  // with indexOf
  // const genresBooks = bookGenres.filter((book, i) => bookGenres.indexOf(book) === i );

  // with Set
  const genresBooksUniques = new Set(allGenresBooks);
  const genresBooks = [...genresBooksUniques];

  return (
    <ul className='flex flex-wrap gap-4 sm:gap-0 justify-around items-center p-4 w-full max-w-3xl'>
      <li className='w-3/4 sm:w-1/3 flex flex-col gap-4 justify-center items-center'>
        <label className='w-full text-center'>Filtrar por páginas</label>
        <input
          className='w-full'
          type='range'
          max='1200'
          name='bookRanges'
          id='bookRanges'
          value={rangeValue}
          onChange={handleChange}
        />
      </li>
      <li className='w-3/4 sm:w-1/3 flex flex-col gap-4 justify-center items-center'>
        <label className='w-full text-center'>Filtrar por género</label>
        <select
          name='genreSelect'
          id='genreSelect'
          className='text-black w-full outline-none'
          value={genreValue}
          onChange={handleChangeSelect}
        >
          <option value='Todos'>Todos</option>
          {genresBooks.map((genreBook, i) => (
            <option key={i} value={genreBook}>
              {genreBook}
            </option>
          ))}
        </select>
      </li>
    </ul>
  );
};
