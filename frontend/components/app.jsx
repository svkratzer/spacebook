import React from 'react';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import ProfileShowContainer from './profile/profile_show_container';
import FourZeroFour from './error_page/four_zero_four';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/newsfeed" component={ProfileShowContainer} />
      <Route component={FourZeroFour}/>
    </Switch>
  </div>
);

export default App;