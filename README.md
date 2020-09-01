# MyFace

MyFace is a Facebook-inspired social media platofrm that allows users to interact with one another through user-generated textual content (i.e. posts and comments). To view the MyFace live page, please, click the following [link](https://svkratzer-myface.herokuapp.com/#/).

### Walkthrough

When users first visit the site, assuming they've yet to make an account and aren't currently logged in, they're taken to MyFace's splash page. If the user has previously logged in and hasn't cleared their cookies, then they should instead be automatically taken to their profile's homepage (i.e. the newsfeed). This is achieved by using Route components from the react-router-dom library and sending them to either render some component, or redirect to another front-end route depending on whether the user is logged in. 

```
// frontend/util/route_util.jsx

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/newsfeed" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
```

In the above code snippet, it is important to note that `loggedIn` is a boolean value mapped into the components' props from a "session" slice of state indicating whether there is a user signed in. Each of the above functional components are then connected to "containers" which are then rendered within the main `App` component as shown below. 

```
// frontend/components/app.jsx

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/newsfeed" component={NewsfeedContainer} />
      <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
      <Route component={FourZeroFour}/>
    </Switch>
  </div>
);
```

Assuming users have yet to make an account, they're taken to the splash page. From here, users can create an account, login with existing credentials, or hit the Demo Login button to automatically sign up with a pre-generated "Nick Cage" account. The splash page was designed to closely resemble Facebook, and special attention was not only paid to its overall layout, but to the way in which errors are rendered as well. 

![splash](https://github.com/svkratzer/MyFace/blob/master/app/assets/images/readme_images/myface_splash.gif)

## Main Features
This site was created to develop my understanding of the React.js while mimicking the very web app for which it was developed--Facebook. With that in mind, I originally set out to develop four features that I found most foundational to Facebook's functionality. 

### Profiles
The first features I set off to develop was user profiles. A user's profile is the launchpad from which they interact with the site. It is also a source of "content" for other users who might interact with the user in question. To get things started, I decided to focus on the basics. From a user's profile, others can view the user's profile and cover photos as well as interact with them in a number of ways. When a user is on their own profile, they can edit their account information and change their bio for other users to see.

### Posts
The second feature I implemented was the ability to make posts. Posts are textual content authored by a user on other users' profile pages, their own profile page, or their newsfeed. The latter two options result in the user making a post that lives on their "wall." The first option results in the post living on the recipient user's "wall." Walls are like mini-newsfeeds only concerned with a specific user. In addition to posts, users have the ability to comment on posts. 

### Friends
The third feature that I implemented was "friends." Friends are like associations made between different users. When two users are friends, they appear in one another's friends list on their profile pages. Additionally, when checking their newsfeed, they will see posts that their friends have authored as well. In this particular rendition of the site, I decided to simplify friending users by automatically letting users friend one another, meaning, theirs no need to make a friend request prior to friending someone. I decided to go this route for two reasons. First, for demonstrational purposes, it made more sense to allow users to just see what happens when they friend one another--nobody actually maintains the seeded, randomly generated accounts, and so functionally, it wouldn't seem like anything was happening. Second, from a techincal/learning perspective, adding actual friend requests would have been time consuming without furthering my learning goals for the project. 

### Newsfeed
The fourth feature that I implemented was a newsfeed. The newsfeed is a stream of all posts made by the user and their friends. These posts appear on the user's "homepage" and is the main way to view content on the site. The newsfeed is important, because it removes the necessity of users having to visit all of their friends' profiles individually to view their posts. Instead, they can view them all from a readily available, centralized source. For this reason, in terms of UX, the newsfeed is essential. 

![infinite-scroll](https://github.com/svkratzer/MyFace/blob/master/app/assets/images/readme_images/myface_infinitescroll.gif)
![search](https://github.com/svkratzer/MyFace/blob/master/app/assets/images/readme_images/myface_search.gif)
