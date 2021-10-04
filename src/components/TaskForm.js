function TaskForm({ user }) {
  return (
    <form class="task__form">
      <label>Имя пользователя</label>
      <input name="userName" type="text" value={ user.username } />
      <label>E-mail</label>
      <input name="email" type="email" value={ user.email } />
      <label>Сообщение</label>
      <textarea name="message" type="text" />
      <button class="task__submit" type="submit">Создать</button>
    </form>
  );
}

export default TaskForm;
