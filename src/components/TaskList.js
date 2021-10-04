import Task from './Task';

function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => <Task
      username={task.username}
      message={task.message}
      key={Math.floor(Date.now() / 100000)} />)}
    </>
  );
}

export default TaskList;
