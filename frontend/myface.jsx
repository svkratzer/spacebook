import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    };
  }

  window.onclick = (event) => {
    if (!event.target.matches('.clicker')) {
      const dropdown = document.getElementsByClassName("dropdown-content");
      $(dropdown[0]).addClass('hidden');
      $('.dropdown-button').removeClass('clicked');
    }
  }

  const store = configureStore(preloadedState);

  /*
  // TESTING
    window.dispatch = store.dispatch;
    window.getState = store.getState;
  // TESTING
  */

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});