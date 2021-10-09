import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';

const AppRouter = ({
  tasks,
  taskTotal,
  onSubmit,
  header,
}) => (
      <Switch>
        <Route exact path="/">
          <Main
            tasks={tasks}
            taskTotal={taskTotal}
            onSubmit={onSubmit}
            header={header}
          />
        </Route>
        <Route path="/login" component={ Login } />
      </Switch>
);

export default AppRouter;
