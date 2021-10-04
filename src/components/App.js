import React, { useEffect, useState } from 'react';
import AppContext from '../contexts/context';
import { api } from '../utils/api';
import AppRouter from './AppRouter';
import NavBar from './NavBar';

/* eslint-disable */

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [defaultUser, setDefaultUser] = useState({
    username: '',
    email: '',
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [taskMessage, setTaskMessage] = useState('');
  const [taskList, setTaskList] = useState([]);

  React.useEffect(() => {
    Promise.all([api.getTasks(pageNumber)])
      .then((answer) => {
        if (answer[0].message.tasks.length) {
          setTaskList([...answer[0].message.tasks]);
          setTaskMessage('Список задач:');
        } else {
          setTaskMessage('Задач пока нет!');
        }
        console.log(taskList);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  function handleTaskSubmit(task) {
    const newList = [...taskList, task];
    setTaskList(newList);
  }

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      pageNumber,
      setPageNumber,
      defaultUser,
      setDefaultUser,
    }}>
      <NavBar />
      <AppRouter tasks={taskList} onSubmit={handleTaskSubmit} header={taskMessage} />
    </AppContext.Provider>
  );
}

export default App;
