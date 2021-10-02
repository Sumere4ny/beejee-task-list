import React, {useEffect, useState} from 'react';
import { AppContext } from './contexts/context';
import AppRouter from './AppRouter';
import Header from './Header';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true);
    }
  }, [])

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      pageNumber
    }}>
      <Header />
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
