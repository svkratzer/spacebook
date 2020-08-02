import * as ReactApiUtil from '../util/react_api_util'

export const RECEIVE_REACT = 'RECEIVE_REACT'
export const REMOVE_REACT = 'REMOVE_REACT'

// STANDARD ACTION CREATORS

export const receiveReact = react => ({
  type: RECEIVE_REACT,
  react
});

export const removeReact = react => ({
  type: REMOVE_REACT,
  react
});

// THUNK ACTION CREATORS

export const createReact = react => dispatch =>
  ReactApiUtil.postReact(react)
    .then(react => dispatch(receiveReact(react)));

export const updateReact = react => dispatch =>
  ReactApiUtil.updateReact(react)
    .then(react => dispatch(receiveReact(react)));

export const deleteReact= reactId => dispatch =>
  ReactApiUtil.deleteReact(reactId)
    .then(react => dispatch(removeReact(react)));