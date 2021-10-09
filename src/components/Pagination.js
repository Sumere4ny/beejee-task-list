import { useContext } from 'react';
import AppContext from '../contexts/context';

const Pagination = ({ taskTotal }) => {
  const { pageNumber, setPageNumber } = useContext(AppContext);

  if (taskTotal <= 3) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        Назад
      </button>
      <div>Страница {pageNumber}</div>
      <button
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={pageNumber * 3 >= taskTotal}
      >
        Дальше
      </button>
    </div>
  );
};

export default Pagination;
