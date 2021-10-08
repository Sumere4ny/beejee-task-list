import { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleUserChange(evt) {
    setUsername(evt.target.value);
  }

  function handleMessageChange(evt) {
    setMessage(evt.target.value);
  }

  function handleShowForm() {
    setShowForm(!showForm);
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
      text: message,
    });
    hanleClearInputs();
    evt.target.reset();
  }

  return (
    <>
      <div class="button__show-form" onClick={handleShowForm}>{showForm ? 'Скрыть форму' : 'Добавить задание'}</div>
      <form className={`task__form ${showForm && 'task__form_visible'}`} onSubmit={handleSubmit}>
        <label>Имя пользователя</label>
        <input
          name="username"
          id="username"
          type="text"
          minLength="2"
          maxLength="40"
          value={username}
          onChange={handleUserChange}
          required />
        <span id='username-error' className='task__form_input-error'></span>
        <label>E-mail</label>
        <input
          name="email"
          id="email"
          type="email"
          minLength="5"
          maxLength="40"
          value={email}
          onChange={handleEmailChange}
          required />
        <span id='email-error' className='task__form_input-error'></span>
        <label>Сообщение</label>
        <textarea name="message" type="text" onChange={handleMessageChange} />
        <button className="task__submit" type="submit" value={message}>Создать</button>
      </form>
    </>
  );
}

export default TaskForm;
