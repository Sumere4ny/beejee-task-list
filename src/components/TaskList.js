import Task from './Task';

function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => <Task userName={task.username} message={task.text} key={task.id} />)}
    </>
  );
}

export default TaskList;
