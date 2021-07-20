import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';
import ProtectedRoute from './helpers/ProtectedRoute';
import IsUserLoggedIn from './helpers/IsUserLoggedIn';


const Login = lazy(() => import ('./pages/Login'));
const Signup = lazy(() => import ('./pages/Signup'));
const Dashboard = lazy(() => import ('./pages/Dashboard'));
const NotFound = lazy(() => import ('./pages/NotFound'));
const Profile = lazy(() => import ('./pages/Profile'));

const App = () => {

  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}> 
          <Switch>
            <IsUserLoggedIn exact path={ROUTES.LOGIN} loggedInPath={ROUTES.DASHBOARD} user={user}>
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn exact path={ROUTES.SIGN_UP} loggedInPath={ROUTES.DASHBOARD} user={user}>
              <Signup />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute exact path={ROUTES.DASHBOARD} user={user}>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
