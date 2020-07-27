import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '/store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // FOR TESTING PURPOSES ONLY
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // DELETE FOR PRODUCTION

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});