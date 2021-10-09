import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/context';
import { auth } from '../utils/auth';

function Login() {
  const history = useHistory();
  const { setIsAuth } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const [nameValidationMessage, setNameValidationMessage] = useState('');
  const [passValidationMessage, setPassValidationMessage] = useState('');
  const [isProfileFormValid, setIsProfileFormValid] = useState(false);

  useEffect(() => {
    function checkProfileFormValidity() {
      if (isNameValid && isPassValid) {
        setIsProfileFormValid(true);
      } else {
        setIsProfileFormValid(false);
      }
    }
    checkProfileFormValidity();
  }, [isNameValid, isPassValid]);

  function handleNameChange(evt) {
    setUsername(evt.target.value);
    setIsNameValid(evt.target.checkValidity());
    setNameValidationMessage(evt.target.validationMessage);
  }

  function handlePassChange(evt) {
    setPassword(evt.target.value);
    setIsPassValid(evt.target.checkValidity());
    setPassValidationMessage(evt.target.validationMessage);
  }

  function hanleClearInputs() {
    setPassword('');
    setUsername('');
  }

  function setAuthToken(data) {
    localStorage.setItem('token', JSON.stringify(data));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!(username || password)) {
      return;
    }
    auth.login({ username, password })
      .then(({ status, message }) => {
        // eslint-disable-next-line
        console.log(status);
        if (status === 'ok') {
          setAuthToken(message.token);
          setIsAuth(true);
          history.push('/');
        } else {
          setNameValidationMessage(message.username);
          setPassValidationMessage(message.password);
        }
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err));
    hanleClearInputs();
    evt.target.reset();
  }

  return (
    <main className="main__content main__content_login">
      <h1>Авторизация</h1>
      <form className="login__form" onSubmit={handleSubmit}>
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
        <label>Пароль</label>
        <input
          name="password"
          id="password"
          type="password"
          /* pattern="[a-zA-Z0-9]{1,15}" */
          minLength="2"
          maxLength="20"
          value={password}
          onChange={handlePassChange}
          required />
        <span id='password-error' className='task__form_input-error'>{passValidationMessage}</span>
        <button className="task__submit" type="submit" disabled={!isProfileFormValid}>Отправить</button>
      </form>
    </main>
  );
}

export default Login;
