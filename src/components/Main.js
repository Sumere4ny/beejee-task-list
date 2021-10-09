import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Sorting from './Sorting';
import Pagination from './Pagination';

const Main = ({
  tasks,
  taskTotal,
  header,
  onSubmit,
}) => (
    <main className="main">
      <div className="main__content">
        <h1>{header}</h1>
        <Sorting />
        <TaskList tasks={tasks} />
        <Pagination taskTotal={taskTotal} />
      </div>
      <div className="main__sidebar">
        <TaskForm onSubmit={onSubmit} />
      </div>
    </main>
);

export default Main;
