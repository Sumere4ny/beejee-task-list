import TaskList from './TaskList';
import TaskForm from './TaskForm';

function Main({
  tasks,
  header,
  onSubmit,
}) {
  return (
    <main className="content">
      <h1>{header}</h1>
      <TaskList tasks={tasks} />
      <TaskForm onSubmit={onSubmit}/>
    </main>
  );
}

export default Main;
