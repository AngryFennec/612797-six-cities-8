import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../views/main/main';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../views/sign-in/sign-in';
import Favorites from '../views/favorites/favorites';
import Error404 from '../views/error404/error404';
import PrivateRoute from '../private-route/private-route';
import Room from '../views/room/room';
import {OfferType, ReviewType} from '../../types/mocksTypes';

type AppPropsType = {
  offers: OfferType[],
  reviews: ReviewType[]
};

function App({offers, reviews}: AppPropsType): JSX.Element {
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
          <Room offer={offers[0]} offers={offers} reviews={reviews} />
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
