import { CardBook } from '../components/CardBook';
import { useFetch } from '../fetch/dataFetch';

export const ReadingList = () => {
  // const books = useFetch('/src/data/books.json');

  const booksMock = [
    {
      book: {
        title: 'Dune',
        pages: 412,
        genre: 'Ciencia ficción',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
        synopsis:
          'En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.',
        year: 1965,
        ISBN: '978-044121727-191',
        author: {
          name: 'Frank Herbert',
          otherBooks: ['El mesías de Dune', 'Hijos de Dune'],
        },
      },
    },
  ];

  return (
    <>
      <h2 className='text-5xl text-center pt-4'>Lista de Lectura</h2>
      <div className='flex flex-wrap items-center justify-center w-full gap-8  max-h-[650px] overflow-x-hidden overflow-y-scroll my-6'>
        {booksMock.map((book) => (
          <CardBook key={book.book.ISBN} {...book} />
        ))}
      </div>
    </>
  );
};
