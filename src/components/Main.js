import TaskList from './TaskList';
import TaskForm from './TaskForm';

function Main({
  tasks,
  header,
  onSubmit,
}) {
  return (
    <main className="content">
      <TaskForm onSubmit={onSubmit}/>
      <h1>{header}</h1>
      <TaskList tasks={tasks} />
    </main>
  );
}

export default Main;
