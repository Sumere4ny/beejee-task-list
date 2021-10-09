import { useState, useEffect } from 'react';

function TaskForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [nameValidationMessage, setNameValidationMessage] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [isProfileFormValid, setIsProfileFormValid] = useState(false);

  useEffect(() => {
    function checkProfileFormValidity() {
      if (isNameValid && isEmailValid && username && email) {
        setIsProfileFormValid(true);
      } else {
        setIsProfileFormValid(false);
      }
    }
    checkProfileFormValidity();
  }, [username, email, isNameValid, isEmailValid]);

  useEffect(() => {
    if (showForm) {
      setNameValidationMessage('');
      setEmailValidationMessage('');
      setIsNameValid(true);
      setIsEmailValid(true);
    }
  }, [showForm]);

  function handleNameChange(evt) {
    setUsername(evt.target.value);
    setIsNameValid(evt.target.checkValidity());
    setNameValidationMessage(evt.target.validationMessage);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setIsEmailValid(evt.target.checkValidity());
    setEmailValidationMessage(evt.target.validationMessage);
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
      <div className="button__show-form"
        onClick={handleShowForm}>{showForm ? 'Скрыть форму' : 'Добавить задание'}</div>
      <form className={`task__form ${showForm && 'task__form_visible'}`} onSubmit={handleSubmit}>
        <label>Имя пользователя</label>
        <input
          name="username"
          id="username"
          type="text"
          minLength="2"
          maxLength="20"
          value={username}
          onChange={handleNameChange}
          required />
        <span id='username-error' className='task__form_input-error'>{nameValidationMessage}</span>
        <label>E-mail</label>
        <input
          name="email"
          id="email"
          type="email"
          minLength="5"
          maxLength="20"
          value={email}
          onChange={handleEmailChange}
          required />
        <span id='email-error' className='task__form_input-error'>{emailValidationMessage}</span>
        <label>Сообщение</label>
        <textarea name="message" type="text" onChange={handleMessageChange} />
        <button className="task__submit" type="submit"
          value={message} disabled={!isProfileFormValid}>Создать</button>
      </form>
    </>
  );
}

export default TaskForm;
