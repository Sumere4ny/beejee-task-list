import React, { useEffect, useState } from 'react';
import AppContext from '../contexts/context';
import { api } from '../utils/api';
import AppRouter from './AppRouter';
import NavBar from './NavBar';

/* eslint-disable */

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [tasksLength, setTasksLength] = useState(0);
  const [taskMessage, setTaskMessage] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    api.getTasks(pageNumber, sortField, sortDirection)
      .then((answer) => {
        if (answer.status == 'ok') {
          setTaskList([...answer.message.tasks]);
          setTaskMessage(answer.message.tasks.length ? 'Список задач:' : 'Задач пока нет!');
          setTasksLength(Number(answer.message.total_task_count));
        }
      })
      .catch(err => console.log(err));
  }, [pageNumber, tasksLength, sortField, sortDirection]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  function handleTaskSubmit(task) {
    console.log(task);
    setTaskList([...taskList, task]);
    api.createTask(task)
    .then((answer) => {
      console.log(answer.message);
      if (answer.status == 'ok') {
        setTasksLength(tasksLength + 1);
      } else {
        setTaskMessage('Ошибка добавления');
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      pageNumber,
      setPageNumber,
      setSortField,
      setSortDirection,
    }}>
      <NavBar />
      <AppRouter
        tasks={taskList}
        taskTotal={tasksLength}
        onSubmit={handleTaskSubmit}
        header={taskMessage} />
    </AppContext.Provider>
  );
}

export default App;
