function Task({ userName, message }) {
  return (
    <div className="tasklist__task">
      <h1>{userName}</h1>
      <p>{message}</p>
    </div>
  );
}

export default Task;
