/* eslint-disable react/prop-types */
import { CardBook } from '../components/CardBook';

export const ReadingList = ({ selectedBooks, handleToggleBook }) => {
  return (
    <>
      <h2 className='text-5xl text-center pt-4'>Lista de Lectura</h2>
      <div className='flex flex-wrap items-center justify-center w-full gap-8 max-h-[650px] overflow-x-hidden overflow-y-scroll my-6'>
        {selectedBooks.map((book) => (
          <CardBook
            key={book.book.ISBN}
            {...book}
            handleToggle={() => handleToggleBook(book)}
            isSelected={true} // Opcional, solo para marcar que están en la lista seleccionada
          />
        ))}
      </div>
    </>
  );
};
