export const Header = ({ availableBooks, readBooks }) => {
  return (
    <header>
      <h1 className='font-bold text-5xl'>
        {availableBooks} Libros disponibles
      </h1>
      <h3 className='font-medium text-2xl'>
        {readBooks} en la lista de lectura
      </h3>
    </header>
  );
};
