import React from 'react';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import FourZeroFour from './error_page/four_zero_four';
import NewsfeedContainer from './newsfeed/newsfeed_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/newsfeed" component={NewsfeedContainer} />
      <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
      <Route component={FourZeroFour}/>
    </Switch>
  </div>
);

export default App;