import { useContext } from 'react';
import AppContext from '../contexts/context';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function Main({
  tasks,
  header,
}) {
  const value = useContext(AppContext);
  return (
    <main class="content">
      <h1>{header}</h1>
      <TaskList tasks={tasks} />
      <TaskForm user={value.defaultUser} />
    </main>
  );
}

export default Main;
