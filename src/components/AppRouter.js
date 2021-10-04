import { Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../contexts/context';
import Login from './Login';
import Main from './Main';

const AppRouter = ({
  tasks,
  onSubmit,
  header,
}) => {
  const { pageNumber } = useContext(AppContext);

  return (
      <Switch>
        <Route path="/" page={pageNumber} exac>
          <Main
            tasks={tasks}
            onSubmit={onSubmit}
            header={header}
          />
        </Route>
        <Route path="/login" component={ Login } />
      </Switch>
  );
};

export default AppRouter;
