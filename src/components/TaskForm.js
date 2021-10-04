import { useContext, useState } from 'react';
import AppContext from '../contexts/context';

function TaskForm({ onSubmit }) {
  const { defaultUser } = useContext(AppContext);

  const [email, setEmail] = useState(defaultUser.email);
  const [username, setUsername] = useState(defaultUser.username);
  const [message, setMessage] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleUserChange(evt) {
    setUsername(evt.target.value);
  }

  function handleMessageChange(evt) {
    setMessage(evt.target.value);
  }

  function hanleClearInputs() {
    setEmail('');
    setUsername('');
    setMessage('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!(username || email)) {
      return;
    }
    onSubmit({
      email,
      username,
      message,
    });
    hanleClearInputs();
  }

  return (
    <form className="task__form" onSubmit={handleSubmit}>
      <label>Имя пользователя</label>
      <input name="username" type="text" value={username} onChange={handleUserChange} />
      <label>E-mail</label>
      <input name="email" type="email" value={email} onChange={handleEmailChange} />
      <label>Сообщение</label>
      <textarea name="message" type="text" onChange={handleMessageChange} />
      <button className="task__submit" type="submit" value={message} >Создать</button>
    </form>
  );
}

export default TaskForm;
