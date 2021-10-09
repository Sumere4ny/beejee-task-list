import Task from './Task';

function TaskList({ tasks, onEdit }) {
  return (
    <>
      {tasks.map((task) => <Task
      username={task.username}
      message={task.text}
      status={task.status}
      email={task.email}
      key={task.id}
      editTask={onEdit} />)}
    </>
  );
}

export default TaskList;
