function Task({ username, message }) {
  return (
    <div className="tasklist__task">
      <h1>{username}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Task;
