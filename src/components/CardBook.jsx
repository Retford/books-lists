export const CardBook = ({ book, toggleButton, setToggleButton }) => {
  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <div className='w-48 h-auto relative'>
      <img
        src={`${book.cover}`}
        alt={`${book.title}`}
        className='w-full h-auto'
      />
      <div className='absolute top-2 right-2 rounded-lg bg-white text-black font-bold text-xl border-black border-solid border-2'>
        <button className='px-2 pb-1 w-8' onClick={handleToggle}>
          {toggleButton ? '+' : '-'}
        </button>
      </div>
    </div>
  );
};
