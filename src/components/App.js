import React, { useEffect, useState } from 'react';
import AppContext from '../contexts/context';
import { api } from '../utils/api';
import AppRouter from './AppRouter';
import NavBar from './NavBar';

/* eslint-disable */

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [taskMessage, setTaskMessage] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    api.getTasks(pageNumber)
      .then((answer) => {
        if (answer.status == 'ok') {
          setTaskList([...answer.message.tasks]);
          setTaskMessage(answer.message.tasks.length ? 'Список задач:' : 'Задач пока нет!');
          console.log(taskList);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  function handleTaskSubmit(task) {
    console.log(task);
    setTaskList([...taskList, task]);
    /* api.createTask(task)
    .then((answer) => {
      console.log(answer.message);
      if (answer.status == 'ok') {
        setTaskList([...taskList, data.message]);
      } else {
        setTaskMessage('Ошибка добавления');
      }
    })
    .catch(err => console.log(err)); */
  }

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      pageNumber,
      setPageNumber,
    }}>
      <NavBar />
      <AppRouter tasks={taskList} onSubmit={handleTaskSubmit} header={taskMessage} />
    </AppContext.Provider>
  );
}

export default App;
