export const Header = ({ availableBooks }) => {
  return (
    <header>
      <h1 className='font-bold text-5xl'>
        {availableBooks} Libros disponibles
      </h1>
    </header>
  );
};
