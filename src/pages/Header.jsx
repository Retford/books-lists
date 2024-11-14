export const Header = ({ availableBooks, readBooks }) => {
  return (
    <header className='text-center'>
      <h1 className='font-bold text-3xl sm:text-5xl'>
        {availableBooks} Libros disponibles
      </h1>
      <h3 className='font-medium text-lg sm:text-2xl'>
        {readBooks} en la lista de lectura
      </h3>
    </header>
  );
};
