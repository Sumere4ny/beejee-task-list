import { useState } from 'react';
/* eslint-disable */
function TaskEdit({ key, status, text }) {
  const [newStatus, setNewStatus] = useState(status);
  const [message, setMessage] = useState(text);
  const token = localStorage.getItem('token');

  function handleMessageChange(evt) {
    setMessage(evt.target.value);
  }

  function hanleClearInputs() {
    setNewStatus(null);
    setMessage('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (token) {
      console.log(newStatus, text, key);
    }
    hanleClearInputs();
    evt.target.reset();
  }

  return (
    <>
      <form className='task__form task__form_visible' onSubmit={handleSubmit}>
      <label className="form-check-label">Выполнено</label>
        <input type="checkbox"
          className="task__input"
          checked={newStatus === 10}
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
