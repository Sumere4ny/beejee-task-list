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
  const [needUpdate, setNeedUpdate] = useState(false);

  useEffect(() => {
    api.getTasks(pageNumber, sortField, sortDirection)
      .then(({ status, message }) => {
        if (status == 'ok') {
          setTaskList([...message.tasks]);
          setTaskMessage(message.tasks.length
            ? 'Список задач:' : 'Задач пока нет!');
          setTasksLength(Number(message.total_task_count));
        }
      })
      .catch(err => console.log(err));
      setNeedUpdate(false);
  }, [pageNumber, tasksLength, sortField, sortDirection, needUpdate]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  function handleTaskSubmit(task) {
    api.createTask(task)
    .then(({ status, message }) => {
      if (status == 'ok') {
        setTaskMessage('Успешно добавлено');
        setTimeout(() => {
          setTasksLength(tasksLength + 1);
        }, 2000);
      } else {
        setTaskMessage('Ошибка добавления');
      }
    })
    .catch(err => console.log(err));
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setIsAuth(false);
  }

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      pageNumber,
      setPageNumber,
      setNeedUpdate,
      setSortField,
      setSortDirection,
    }}>
      <NavBar onLogout={handleLogout} />
      <AppRouter
        tasks={taskList}
        taskTotal={tasksLength}
        onSubmit={handleTaskSubmit}
        header={taskMessage} />
    </AppContext.Provider>
  );
}

export default App;
