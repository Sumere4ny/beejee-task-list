import { useContext } from 'react';
import AppContext from '../contexts/context';

const Sorting = () => {
  const { setSortField, setSortDirection } = useContext(AppContext);

  return (
    <div className="sort">
      <div>Сортировать</div>
      <select
        onChange={(e) => setSortField(e.target.value)}
      >
        <option value="id">id</option>
        <option value="username">username</option>
        <option value="email">email</option>
        <option value="status">status</option>
      </select>
      <select
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
};

export default Sorting;
