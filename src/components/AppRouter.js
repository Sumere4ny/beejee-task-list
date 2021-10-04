import { Switch, Route } from 'react-router-dom';
// import { privateRoutes, publicRoutes } from "../utils/router";
import { AppContext } from './contexts/context';
import Login from './Login';
import Main from './Main';


const AppRouter = () => {
  const { isAuth, pageNumber } = useContext(AppContext);
  console.log(isAuth)

  return (
      <Switch>
        <Route path="/" page={pageNumber} exact component={ Main } />
        <Route path="/create" component={ TaskForm } />
        <Route path="/login" component={ Login } />
      </Switch>
  )
}

export default AppRouter;
