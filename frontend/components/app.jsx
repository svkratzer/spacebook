import React from 'react';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileShowContainer from './profile/profile_show_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SplashContainer} />
    <ProtectedRoute path="/newsfeed" component={ProfileShowContainer} />
  </div>
);

export default App;