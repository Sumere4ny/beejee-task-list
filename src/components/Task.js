import { useContext } from 'react';
import AppContext from '../contexts/context';

function Task({
  username, message, status, email, key, editTask,
}) {
  /* eslint-disable */
  const taskList = {
    0: 'задача не выполнена',
    1: 'задача не выполнена, отредактирована админом',
    10: 'задача выполнена',
    11: 'задача отредактирована админом и выполнена',
  }

  const { isAuth } = useContext(AppContext);

  const handleTaskEdit = () => {
    // showTaskEditForm();
    editTask({ key, status, text })
  }

  return (
    <div className={`tasklist__task ${status >= 10 && 'tasklist__task_done'}`}>
      {isAuth && <div className="tasklist__task_edit" onClick={handleTaskEdit}></div>}
      <div className="task__status"><p>Статус задачи: {taskList[status]}</p></div>
      <h2 style={{ 'textAlign': 'center' }}>Имя пользователя: {username}</h2>
      <p>Email: <a href={`mailto: ${email}`}>{email}</a></p>
      <p>Описание</p>
      <p>{message}</p>
    </div>
  );
}

export default Task;
