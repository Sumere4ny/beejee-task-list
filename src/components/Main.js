import { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskEdit from './TaskEdit';
import Sorting from './Sorting';
import Pagination from './Pagination';

const Main = ({
  tasks,
  taskTotal,
  header,
  onSubmit,
}) => {
  const [taskToEdit, setTaskToEdit] = useState({});

  const handleEdit = (task) => {
    setTaskToEdit(task);
  }

  return (
    <main className="main">
      <div className="main__content">
        <h1>{header}</h1>
        <Sorting />
        <TaskList tasks={tasks} onEdit={handleEdit} />
        <Pagination taskTotal={taskTotal} />
      </div>
      <div className="main__sidebar">
        <TaskForm onSubmit={onSubmit} />
        {task && <TaskEdit task={taskToEdit} />}
      </div>
    </main>
);
}

export default Main;
