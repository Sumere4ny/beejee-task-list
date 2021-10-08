function Task({ username, message, email }) {
  /* eslint-disable */
  return (
    <div className="tasklist__task">
      <h2 style={{ 'textAlign': 'center' }}>Имя пользователя: {username}</h2>
      <p>Email: <a href={`mailto: ${email}`}>{email}</a></p>
      <p>Описание</p>
      <p>{message}</p>
    </div>
  );
}

export default Task;
