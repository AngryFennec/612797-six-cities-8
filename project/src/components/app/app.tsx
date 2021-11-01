import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../views/main/main';
import {DefaultPropsType} from '../../types/propsTypes';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../views/sign-in/sign-in';
import Favorites from '../views/favorites/favorites';
import Error404 from '../views/error404/error404';
import PrivateRoute from '../private-route/private-route';
import Room from '../views/room/room';

function App({offers}: DefaultPropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Room />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
