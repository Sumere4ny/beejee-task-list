import { useContext, useState } from 'react';
import AppContext from '../contexts/context';

function TaskForm({ onSubmit }) {
  const { defaultUser } = useContext(AppContext);

  const [email, setEmail] = useState(defaultUser.email);
  const [username, setUsername] = useState(defaultUser.username);

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleUserChange(evt) {
    setUsername(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // eslint-disable-next-line
    console.log(evt.target.value);
    onSubmit('');
  }

  return (
    <form class="task__form" onSubmit={handleSubmit}>
      <label>Имя пользователя</label>
      <input name="username" type="text" value={username} onChange={handleUserChange} />
      <label>E-mail</label>
      <input name="email" type="email" value={email} onChange={handleEmailChange} />
      <label>Сообщение</label>
      <textarea name="message" type="text" />
      <button class="task__submit" type="submit">Создать</button>
    </form>
  );
}

export default TaskForm;
