import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/context';
import { api } from '../utils/api';
/* eslint-disable */
function TaskEdit({ task, clearTask }) {
  const history = useHistory();
  const { setIsAuth, setNeedUpdate } = useContext(AppContext);
  const [message, setMessage] = useState(task.text);
  const [newStatus, setNewStatus] = useState(task.status);
  const [heading, setHeading] = useState('Изменить статус и текст');
  const token = JSON.parse(localStorage.getItem('token'));

  function handleMessageChange(evt) {
    setMessage(evt.target.value);
  }

  function hanleClearInputs() {
    setNewStatus(null);
    setMessage('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let correctStatus = newStatus;
    if (token) {
      if ( (task.status === 1
        || task.status === 11)
        && newStatus !== task.status ) {
        correctStatus = newStatus + 1;
      } else if (message !== task.text) {
        correctStatus = newStatus + 1;
      }
      console.log(correctStatus);
      api.changeTask({
        token,
        id: task.id,
        status: correctStatus,
        text: message,
      })
      .then(({ status, message }) => {
        if (status === 'ok') {
          setHeading('Успешно');
          setNeedUpdate(true);
          clearTask();
        } else {
          setHeading(message);
          setIsAuth(false);
          history.push('/login');
        }
      })
      .catch((err) => console.log(err));
    } else {
      setHeading('Токен не найден');
      history.push('/login');
    }
    hanleClearInputs();
    evt.target.reset();
  }

  return (
    <>
      <form className='task__form task__form_visible' onSubmit={handleSubmit}>
      <h2>{heading}</h2>
      <p>Имя пользователя: {task.username}</p>
      <p>Email: <a href={`mailto: ${task.email}`}>{task.email}</a></p>
      <label className="form-check-label">Выполнено</label>
        <input type="checkbox"
          className="task__input"
          checked={newStatus === 10 || newStatus === 11}
          onChange={() => setNewStatus(newStatus === 10 ? 0 : 10)}
        />
        <label>Сообщение</label>
        <textarea name="message" type="text"
          value={message}
          onChange={handleMessageChange} />
        <button className="task__submit" type="submit">Изменить</button>
      </form>
    </>
  );
}

export default TaskEdit;
